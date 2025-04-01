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
import { brands } from '../../data/brands';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Utility function to create URL-friendly slug
const createSlug = (name: string): string => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

function BrandPage() {
  const { brandName } = useParams<{ brandName: string }>();
  const navigate = useNavigate();
  const theme = useTheme();
  const { t } = useTranslation();
  
  const brand = brandName ? brands[brandName] : null;
  const [productImages, setProductImages] = useState<Record<string, string>>({});

  useEffect(() => {
    const loadImages = async () => {
      if (brand) {
        try {
          // Import all images from the brand's folder
          const imageModules = import.meta.glob('/src/assets/images/**/*.{jpg,jpeg,png}', { eager: true });
          const images: Record<string, string> = {};

          // Group images by product name
          Object.entries(imageModules).forEach(([path, module]: [string, any]) => {
            const lowerPath = path.toLowerCase();
            const lowerBrandName = brand.name.toLowerCase();
            
            // Only process images from this brand's folder
            if (lowerPath.includes(`/${lowerBrandName}/`)) {
              brand.products.forEach(product => {
                // Split product name into parts
                const productNameParts = product.name.split(' ');
                const baseProductName = productNameParts[0].toLowerCase();
                const seriesType = productNameParts.slice(1).join(' ').toLowerCase();
                
                // Check if the path includes both the base product name and series/type
                if (lowerPath.includes(baseProductName) && lowerPath.includes(seriesType)) {
                  // Get the number from the filename
                  const match = path.match(/\d+(?=\.[^.]+$)/);
                  const num = match ? parseInt(match[0]) : Infinity;
                  
                  // Only keep the first image (01) for each product
                  if (num === 1 || !images[product.name]) {
                    images[product.name] = module.default;
                    console.log(`Found image for ${product.name}:`, path);
                  }
                }
              });
            }
          });

          console.log('Loaded product images:', images);
          setProductImages(images);
        } catch (error) {
          console.error('Error loading product images:', error);
        }
      }
    };

    loadImages();
  }, [brand]);

  if (!brand) {
    return (
      <Container>
        <Box py={8} textAlign="center">
          <Typography variant="h2">Brand not found</Typography>
          <Button variant="contained" onClick={() => navigate('/')} sx={{ mt: 2 }}>
            Return to Home
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
          onClick={() => navigate('/')}
          variant="text"
          sx={{ mb: 4 }}
        >
          {t('common.backToHome')}
        </Button>

        <Paper sx={{ p: 4, mb: 6, bgcolor: 'background.paper' }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src={brand.logo}
                alt={brand.name}
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: 200,
                  objectFit: 'contain',
                }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h1" gutterBottom>
                {t(`brands.${brand.id}.name`)}
              </Typography>
              <Typography variant="h5" color="text.secondary" paragraph>
                {t(`brands.${brand.id}.description`)}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" gutterBottom>
            {t('products.ourProducts')}
          </Typography>
        </Box>
        
        <Grid container spacing={2}>
          {brand.products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
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
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default BrandPage; 