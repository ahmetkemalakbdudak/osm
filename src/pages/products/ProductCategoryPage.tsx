import React, { useState, useEffect, useMemo } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
  Paper,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { brands, Product, ProductCategory, Brand } from '../../data/brands';
import { useTranslation } from 'react-i18next';

// Utility function to create URL-friendly slug (copied from BrandPage/ProductPage for consistency)
const createSlug = (name: string): string => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

function ProductCategoryPage() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const navigate = useNavigate();
  const theme = useTheme();
  const { t } = useTranslation();
  const [productImages, setProductImages] = useState<Record<string, string>>({});

  const category = categoryName as ProductCategory;

  // Filter products by category across all brands, memoized by category
  const filteredProducts: Product[] = useMemo(() => {
    // console.log(`Filtering products for category: ${category}`); // Original debug log
    return Object.values(brands)
      .flatMap(brand => brand.products)
      .filter(product => product.category === category);
  }, [category]); // Only recalculate when category changes

  // Find the brand for a given product (needed for image path)
  const findBrandForProduct = (productId: number): Brand | undefined => {
    for (const brand of Object.values(brands)) {
      if (brand.products.some(p => p.id === productId)) {
        return brand;
      }
    }
    return undefined;
  };

  useEffect(() => {
    const loadImages = async () => {
      try {
        console.log('Attempting to load images for category:', category); // Added log
        // Adjusted glob pattern to search one level deeper within brand folders
        const imageModules = import.meta.glob('/src/assets/images/*/*/*.{jpg,jpeg,png}', { eager: true });
        console.log('Image modules found (deeper search):', Object.keys(imageModules).length); // Added log
        const images: Record<string, string> = {};

        filteredProducts.forEach(product => {
          const brand = findBrandForProduct(product.id);
          if (!brand) {
            console.warn(`[Image Load] Brand not found for product ID: ${product.id}, Name: ${product.name}`); // Added log
            return;
          }

          const lowerBrandName = brand.name.toLowerCase();
          // Use localeKey first, then try product name directly (as folder name), finally slugified name
          // Ensure potentialFolderNames only contains strings
          const potentialFolderNames = [
              product.localeKey, // Check localeKey first if it exists
              product.name,      // Check raw product name (like "Brake Cleaner")
              createSlug(product.name) // Check slugified name
          ].filter((name): name is string => typeof name === 'string') // Keep only strings
           .map(name => name.toLowerCase()); // Convert to lowercase

          console.log(`[Image Load] Processing Product: ${product.name} (ID: ${product.id}), Brand: ${brand.name}`); // Added log
          console.log(`[Image Load]   Potential folder identifiers (lowercase):`, potentialFolderNames); // Added log

          let foundImagePath: string | null = null;

          // Iterate through potential folder names to find a match
          for (const folderIdentifier of potentialFolderNames) {
             // Iterate through all loaded image modules
             for (const path in imageModules) {
                const lowerPath = path.toLowerCase();
                // Construct the expected pattern: /brand/folderIdentifier/filename.*
                // We need to be careful here, the folderIdentifier might contain characters needing escape if used in regex
                // Simple string inclusion should be safer and sufficient
                const expectedPathSegment = `/${lowerBrandName}/${folderIdentifier}/`;

                if (lowerPath.includes(expectedPathSegment)) {
                  console.log(`[Image Load]   MATCH FOUND for folder '${folderIdentifier}': Path=${path}`); // Added log
                  foundImagePath = path; // Take the first match found for this product
                  break; // Stop searching paths for this folderIdentifier
                }
             }
             if (foundImagePath) break; // Stop searching folderIdentifiers if a match was found
          }


          if (foundImagePath) {
            const module = imageModules[foundImagePath] as any;
            if (module && module.default) {
              images[product.name] = module.default;
              console.log(`[Image Load]   SUCCESS: Using image for ${product.name}: ${foundImagePath}`); // Added log
            } else {
               console.error(`[Image Load]   ERROR: Module or default export missing for ${foundImagePath}`); // Added log
            }
          } else {
            console.warn(`[Image Load]   WARNING: No image found for ${product.name} using brand '${lowerBrandName}' and potential folders [${potentialFolderNames.join(', ')}]. Will use fallback: ${product.image}`); // Added log
          }
          // If no images found, CardMedia will use product.image later
        });

        setProductImages(images);
      } catch (error) {
        console.error('Error loading product category images:', error);
      }
    };

    if (filteredProducts.length > 0) {
      console.log(`[Image Load] Filtered products count: ${filteredProducts.length}. Triggering image load.`); // Added log
      loadImages();
    } else {
       console.log('[Image Load] No filtered products, skipping image load.'); // Added log
    }
    // Removed findBrandForProduct from dependencies as it's stable and defined outside useEffect scope
  }, [filteredProducts, category]);

  if (!category || !['aerosol', 'carWash', 'garage'].includes(category)) {
    return (
      <Container>
        <Box py={8} textAlign="center">
          <Typography variant="h2">{t('products.categoryNotFound')}</Typography>
          <Button variant="contained" onClick={() => navigate('/')} sx={{ mt: 2 }}>
            {t('common.backToHome')}
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')} // Go back to home or maybe previous page?
          variant="text"
          sx={{ 
            mb: 4,
            minWidth: 'auto', // Make button only as wide as icon
            p: 1, // Add some padding around the icon
            borderRadius: '50%', // Make it circular
            '&:hover': { // Add hover effect
              backgroundColor: 'rgba(0, 0, 0, 0.04)'
            }
          }}
        >
          {/* Removed text: {t('common.backToProducts')} */}
        </Button>

        <Paper sx={{ p: 4, mb: 6, bgcolor: 'background.paper' }}>
          <Typography variant="h1" gutterBottom>
            {t(`categories.${category}`)} {/* Use category name for title */}
          </Typography>
        </Paper>
        
        {filteredProducts.length > 0 ? (
          <Grid container spacing={2}>
            {filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={`${product.id}-${createSlug(product.name)}`}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[8],
                    }
                  }}
                  onClick={() => navigate(`/products/${createSlug(product.name)}`)}
                >
                  <Box sx={{ position: 'relative', pt: '56.25%' /* 16:9 aspect ratio */ }}>
                    <CardMedia
                      component="img"
                      image={productImages[product.name] || product.image} 
                      alt={product.name}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        bgcolor: 'background.paper',
                        p: 1,
                      }}
                    />
                  </Box>
                  <CardContent sx={{ p: 1.5 }}>
                    <Typography variant="h6" gutterBottom>
                      {product.name}
                    </Typography>
                    {product.subtitle && (
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {product.subtitle}
                      </Typography>
                    )}
                     {/* Optionally display brand */}
                     {/* <Typography variant="caption" display="block" color="text.secondary">
                       {brands[product.brandId].name} // Assuming product has brandId
                     </Typography> */}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography>{t('products.noProductsInCategory')}</Typography>
        )}
      </Box>
    </Container>
  );
}

export default ProductCategoryPage;