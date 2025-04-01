import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputPath = join(__dirname, '../src/assets/hero-background.jpg');
const outputPath = join(__dirname, '../src/assets/hero-background-optimized.jpg');

sharp(inputPath)
  .resize(1920, 1080, { // Resize to standard HD resolution
    fit: 'cover',
    position: 'center'
  })
  .jpeg({
    quality: 80, // Reduce quality to 80%
    progressive: true, // Enable progressive loading
    mozjpeg: true // Use mozjpeg optimization
  })
  .toFile(outputPath)
  .then(info => {
    console.log('Image optimization complete:', info);
  })
  .catch(err => {
    console.error('Error optimizing image:', err);
  }); 