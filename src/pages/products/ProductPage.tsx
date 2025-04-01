import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Paper,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  useTheme,
  ImageList,
  ImageListItem,
  useMediaQuery,
  IconButton,
  Tabs,
  Tab,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowBack as ArrowBackIcon, NavigateNext as NavigateNextIcon, NavigateBefore as NavigateBeforeIcon } from '@mui/icons-material';
import { brands } from '../../data/brands';
import { useEffect, useState } from 'react';

// Utility function to create URL-friendly slug
const createSlug = (name: string): string => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

// Utility function to find product and its brand by slug
const findProductAndBrand = (slug: string) => {
  for (const [, brand] of Object.entries(brands)) {
    const product = brand.products.find(p => createSlug(p.name) === slug);
    if (product) {
      return { product, brand };
    }
  }
  return { product: null, brand: null };
};

function ProductPage() {
  const { productName } = useParams<{ productName: string }>();
  const navigate = useNavigate();
  const theme = useTheme();
  const [productImages, setProductImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const columns = isMdUp ? 3 : isSmUp ? 2 : 1;

  const { product, brand } = productName ? findProductAndBrand(productName) : { product: null, brand: null };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  useEffect(() => {
    const loadImages = async () => {
      if (product && brand) {
        try {
          console.log('Loading images for:', { brand: brand.name, product: product.name });
          
          // Import all images from the brand's folder
          const imageModules = import.meta.glob('/src/assets/images/**/*.{jpg,jpeg,png}', { eager: true });
          
          // Debug: Log available paths
          console.log('Available image paths:', Object.keys(imageModules));
          
          const images = Object.entries(imageModules)
            .filter(([path]) => {
              const lowerPath = path.toLowerCase();
              const lowerBrandName = brand.name.toLowerCase();
              const lowerProductName = product.name.toLowerCase();
              
              // For Pax products, we need to handle the series/type suffix
              const productNameParts = product.name.split(' ');
              const baseProductName = productNameParts[0].toLowerCase();
              const seriesType = productNameParts.slice(1).join(' ').toLowerCase();
              
              // Debug: Log path matching
              console.log('Checking path:', {
                path: lowerPath,
                brandMatch: lowerPath.includes(lowerBrandName.toLowerCase()),
                productMatch: lowerPath.includes(lowerProductName.toLowerCase()) || 
                             (lowerPath.includes(baseProductName) && lowerPath.includes(seriesType))
              });
              
              return lowerPath.includes(lowerBrandName.toLowerCase()) && 
                     (lowerPath.includes(lowerProductName.toLowerCase()) || 
                      (lowerPath.includes(baseProductName) && lowerPath.includes(seriesType)));
            })
            .map(([path, module]: [string, any]) => {
              console.log('Loading image from path:', path);
              return module.default;
            })
            .sort((a, b) => {
              const aNum = parseInt(a.match(/\d+/g)?.pop() || '0');
              const bNum = parseInt(b.match(/\d+/g)?.pop() || '0');
              return aNum - bNum;
            });

          console.log('Found images:', images.length);
          setProductImages(images);
        } catch (error) {
          console.error('Error loading product images:', error);
          setProductImages(product.image ? [product.image] : []);
        }
      }
    };

    loadImages();
  }, [product, brand]);

  if (!product || !brand) {
    return (
      <Container>
        <Box py={8} textAlign="center">
          <Typography variant="h2">Product not found</Typography>
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
          onClick={() => navigate(`/brands/${brand.id}`)}
          variant="text"
          sx={{ mb: 4 }}
        >
          Back to {brand.name}
        </Button>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <Box
                component="img"
                src={productImages[currentImageIndex] || product.image}
                alt={product.name}
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: theme.shadows[4],
                  objectFit: 'contain',
                  bgcolor: 'background.paper',
                  aspectRatio: '16/9',
                }}
              />
              {productImages.length > 1 && (
                <>
                  <IconButton
                    onClick={handlePreviousImage}
                    sx={{
                      position: 'absolute',
                      left: 8,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      bgcolor: 'rgba(255, 255, 255, 0.8)',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                      },
                    }}
                  >
                    <NavigateBeforeIcon />
                  </IconButton>
                  <IconButton
                    onClick={handleNextImage}
                    sx={{
                      position: 'absolute',
                      right: 8,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      bgcolor: 'rgba(255, 255, 255, 0.8)',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                      },
                    }}
                  >
                    <NavigateNextIcon />
                  </IconButton>
                </>
              )}
            </Box>
            
            {productImages.length > 1 && (
              <Box sx={{ mt: 2 }}>
                <ImageList cols={4} rowHeight={100} gap={8}>
                  {productImages.map((image, index) => (
                    <ImageListItem 
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      sx={{
                        cursor: 'pointer',
                        opacity: currentImageIndex === index ? 1 : 0.6,
                        transition: 'opacity 0.2s',
                        '&:hover': {
                          opacity: 0.8,
                        },
                      }}
                    >
                      <img
                        src={image}
                        alt={`${product.name} - Image ${index + 1}`}
                        loading="lazy"
                        style={{
                          borderRadius: 4,
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          backgroundColor: 'white',
                        }}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
            )}

            {product.videoLinks && product.videoLinks.length > 0 && (
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Product Videos
                </Typography>
                {product.videoLinks.length > 1 && (
                  <Tabs
                    value={currentVideoIndex}
                    onChange={(_, newValue) => setCurrentVideoIndex(newValue)}
                    sx={{ mb: 2 }}
                  >
                    {product.videoLinks.map((_, index) => (
                      <Tab
                        key={index}
                        label={`Video ${index + 1}`}
                        value={index}
                      />
                    ))}
                  </Tabs>
                )}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '56.25%', // 16:9 aspect ratio
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: theme.shadows[4],
                  }}
                >
                  <iframe
                    src={product.videoLinks[currentVideoIndex]}
                    title={`${product.name} - Product Video ${currentVideoIndex + 1}`}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none',
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Box>
              </Box>
            )}
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h1" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
              {product.description}
            </Typography>
            
            <Paper sx={{ p: 4 }}>
              <Typography variant="h6" gutterBottom>
                Technical Specifications
              </Typography>
              <TableContainer>
                <Table>
                  <TableBody>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <TableRow key={key}>
                        <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                          {key}
                        </TableCell>
                        <TableCell>{value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              {product.modelTable && (
                <Box mt={4}>
                  <Typography variant="h6" gutterBottom>
                    Model Specifications
                  </Typography>
                  <TableContainer>
                    <Table>
                      <TableBody>
                        <TableRow>
                          {product.modelTable.headers.map((header, index) => (
                            <TableCell key={index} component="th" scope="row" sx={{ fontWeight: 600 }}>
                              {header}
                            </TableCell>
                          ))}
                        </TableRow>
                        {product.modelTable.rows.map((row, rowIndex) => (
                          <TableRow key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                              <TableCell key={cellIndex}>{cell}</TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default ProductPage; 