import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  useTheme,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { brands, ProductCategory } from '../../data/brands';
import { useState, useMemo, useEffect } from 'react';

// Utility function to create URL-friendly slug
const createSlug = (name: string): string => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

function BrandPage() {
  const { brandName } = useParams<{ brandName: string }>();
  const navigate = useNavigate();
  const theme = useTheme();
  
  const brand = brandName ? brands[brandName] : null;
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [productImages, setProductImages] = useState<Record<string, string>>({});

  const categories = useMemo(() => {
    if (!brand) return [];
    const uniqueCategories = Array.from(new Set(brand.products.map(p => p.category)));
    return ['all' as const, ...uniqueCategories];
  }, [brand]);

  const filteredProducts = useMemo(() => {
    if (!brand) return [];
    if (selectedCategory === 'all') return brand.products;
    return brand.products.filter(p => p.category === selectedCategory);
  }, [brand, selectedCategory]);

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
                const lowerProductName = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '');
                if (lowerPath.includes(lowerProductName)) {
                  // Get the number from the filename
                  const match = path.match(/\d+(?=\.[^.]+$)/);
                  const num = match ? parseInt(match[0]) : Infinity;
                  
                  // Only keep the first image (01) for each product
                  if (num === 1) {
                    images[product.name] = module.default;
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

  const handleCategoryChange = (
    _event: React.MouseEvent<HTMLElement>,
    newCategory: ProductCategory | 'all',
  ) => {
    if (newCategory !== null) {
      setSelectedCategory(newCategory);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          variant="text"
          sx={{ mb: 4 }}
        >
          Back to Home
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
                {brand.name}
              </Typography>
              <Typography variant="h5" color="text.secondary" paragraph>
                {brand.description}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="h2" gutterBottom>
            Our Products
          </Typography>
          <Paper sx={{ p: 2, mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Filter by Category
            </Typography>
            <ToggleButtonGroup
              value={selectedCategory}
              exclusive
              onChange={handleCategoryChange}
              aria-label="product category"
              sx={{
                flexWrap: 'wrap',
                '& .MuiToggleButton-root': {
                  textTransform: 'none',
                  m: 0.5,
                },
              }}
            >
              {categories.map((category) => (
                <ToggleButton
                  key={category}
                  value={category}
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: '16px !important',
                  }}
                >
                  {category === 'all' ? 'All Categories' : category}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Paper>
        </Box>
        
        <Grid container spacing={4}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} md={6} key={product.id}>
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
                      p: 2,
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                    <Typography variant="h5" gutterBottom component="div">
                      {product.name}
                    </Typography>
                    <Chip
                      label={product.category}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  </Box>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {product.description}
                  </Typography>
                  <Box display="flex" flexWrap="wrap" gap={1}>
                    {product.features.slice(0, 2).map((feature, index) => (
                      <Chip
                        key={index}
                        label={feature}
                        size="small"
                        variant="outlined"
                        sx={{ bgcolor: 'background.paper' }}
                      />
                    ))}
                    {product.features.length > 2 && (
                      <Chip
                        label={`+${product.features.length - 2} more`}
                        size="small"
                        variant="outlined"
                        sx={{ bgcolor: 'background.paper' }}
                      />
                    )}
                  </Box>
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