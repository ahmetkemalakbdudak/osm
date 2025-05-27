import { useState, useEffect, useMemo } from 'react';
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
        console.log('Attempting to load images for category:', category);
        const imageModules = import.meta.glob('/src/assets/images/**/*.{jpg,jpeg,png}', { eager: true });
        console.log('Image modules found (category page):', Object.keys(imageModules).length);
        const loadedImages: Record<string, string> = {};

        for (const product of filteredProducts) {
          const brand = findBrandForProduct(product.id);
          if (!brand) {
            console.warn(`[Image Load - Category] Brand not found for product ID: ${product.id}, Name: ${product.name}`);
            continue;
          }

          const productSpecificImages: string[] = [];
          const lowerBrandName = brand.name.toLowerCase();
          const lowerProductName = product.name.toLowerCase();
          
          // For products with series/type suffix
          const productNameParts = product.name.split(' ');
          const baseProductName = productNameParts[0].toLowerCase();
          // Ensure seriesType is a string, even if there are no parts after the first
          const seriesType = productNameParts.length > 1 ? productNameParts.slice(1).join(' ').toLowerCase() : '';


          Object.entries(imageModules).forEach(([path, module]: [string, any]) => {
            const lowerPath = path.toLowerCase();
            // Check if the image belongs to this product under this brand
            // Ensure seriesType is checked only if it's not an empty string
            if (lowerPath.includes(`/${lowerBrandName}/`) &&
                (lowerPath.includes(`/${lowerProductName}/`) || // Match /brand/product-name/
                 (product.localeKey && lowerPath.includes(`/${product.localeKey.toLowerCase()}/`)) || // Match /brand/localeKey/
                 (lowerPath.includes(`/${createSlug(product.name)}/`)) || // Match /brand/slugified-product-name/
                 (seriesType && lowerPath.includes(baseProductName) && lowerPath.includes(seriesType)) // Match base name and series/type
                )
               ) {
              if (module.default) {
                productSpecificImages.push(module.default);
              }
            }
          });
          
          if (productSpecificImages.length > 0) {
            // Sort images (logic copied from ProductPage)
            productSpecificImages.sort((a: string, b: string) => {
              const isADataUri = a.startsWith('data:');
              const isBDataUri = b.startsWith('data:');
              if (isADataUri && !isBDataUri) return 1;
              if (!isADataUri && isBDataUri) return -1;
              if (isADataUri && isBDataUri) return 0;
              const aFilename = a.split('/').pop() || '';
              const bFilename = b.split('/').pop() || '';
              const aMatch = aFilename.match(/[-_]0*(\d+)/) || aFilename.match(/(\d+)/);
              const bMatch = bFilename.match(/[-_]0*(\d+)/) || bFilename.match(/(\d+)/);
              if (aMatch && bMatch) {
                const aNum = parseInt(aMatch[1], 10);
                const bNum = parseInt(bMatch[1], 10);
                return aNum - bNum;
              }
              return aFilename.localeCompare(bFilename);
            });
            loadedImages[product.name] = productSpecificImages[0]; // Use the first sorted image
            console.log(`[Image Load - Category] SUCCESS: Using image for ${product.name}: ${productSpecificImages[0]}`);
          } else {
            console.warn(`[Image Load - Category] WARNING: No specific image found for ${product.name} using brand '${lowerBrandName}'. Will use fallback: ${product.image}`);
            // Fallback to product.image is handled by CardMedia component directly
          }
        }
        setProductImages(loadedImages);
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