import { readdir, stat, rename } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const AUTOMEC_IMAGES_DIR = join(__dirname, '../assets/images/automec');

async function standardizeImages() {
  try {
    // Get all product folders
    const items = await readdir(AUTOMEC_IMAGES_DIR);
    const productFolders = [];
    
    for (const item of items) {
      const itemPath = join(AUTOMEC_IMAGES_DIR, item);
      const stats = await stat(itemPath);
      if (stats.isDirectory() && !item.startsWith('.')) {
        productFolders.push(item);
      }
    }

    // Process each product folder
    for (const productFolder of productFolders) {
      const folderPath = join(AUTOMEC_IMAGES_DIR, productFolder);
      
      // Get all images in the folder
      const files = await readdir(folderPath);
      const images = files
        .filter(file => {
          const ext = extname(file).toLowerCase();
          return ['.jpg', '.jpeg', '.png'].includes(ext) && !file.startsWith('.');
        })
        .sort();

      // Rename each image
      for (let i = 0; i < images.length; i++) {
        const oldName = images[i];
        const ext = extname(oldName);
        const newName = `${productFolder.toLowerCase()}-${String(i + 1).padStart(2, '0')}${ext}`;
        
        const oldPath = join(folderPath, oldName);
        const newPath = join(folderPath, newName);

        if (oldPath !== newPath) {
          await rename(oldPath, newPath);
          console.log(`Renamed: ${oldName} -> ${newName}`);
        }
      }

      console.log(`Processed ${images.length} images in ${productFolder}`);
    }

    console.log('Image standardization complete!');
  } catch (error) {
    console.error('Error standardizing images:', error);
  }
}

standardizeImages(); 