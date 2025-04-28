import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  useTheme,
  ImageList,
  ImageListItem,
  IconButton,
  Tabs,
  Tab,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowBack as ArrowBackIcon, NavigateNext as NavigateNextIcon, NavigateBefore as NavigateBeforeIcon } from '@mui/icons-material';
import { brands } from '../../data/brands';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import FormattedDescription from '../../components/FormattedDescription';

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
  const { t } = useTranslation();
  const [productImages, setProductImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
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
          // Import all images from the brand's folder
          const imageModules = import.meta.glob('/src/assets/images/**/*.{jpg,jpeg,png}', { eager: true });
          const images: string[] = [];

          // Process each image path
          Object.entries(imageModules).forEach(([path, module]: [string, any]) => {
            const lowerPath = path.toLowerCase();
            const lowerBrandName = brand.name.toLowerCase();
            const lowerProductName = product.name.toLowerCase();
            
            // For products with series/type suffix
            const productNameParts = product.name.split(' ');
            const baseProductName = productNameParts[0].toLowerCase();
            const seriesType = productNameParts.slice(1).join(' ').toLowerCase();
            
            // Check if the image belongs to this product
            if (lowerPath.includes(`/${lowerBrandName}/`) && 
                (lowerPath.includes(lowerProductName) || 
                 (lowerPath.includes(baseProductName) && lowerPath.includes(seriesType)))) {
              images.push(module.default);
            }
          });

          // Sort images by their numeric suffix
          images.sort((a, b) => {
            const aNum = parseInt(a.match(/\d+(?=\.[^.]+$)/)?.[0] || '0');
            const bNum = parseInt(b.match(/\d+(?=\.[^.]+$)/)?.[0] || '0');
            return aNum - bNum;
          });

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
          <Typography variant="h2">{t('products.notFound')}</Typography>
          <Button variant="contained" onClick={() => navigate('/')} sx={{ mt: 2 }}>
            {t('products.returnHome')}
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Button
          sx={{ 
            minWidth: 'auto',
            p: 1,
            mb: 4,
            borderRadius: '50%',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)'
            }
          }}
          onClick={() => navigate(`/brands/${brand.id}`)}
        >
          <ArrowBackIcon />
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
                  {t('products.productVideos')}
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
                        label={`${t('products.video')} ${index + 1}`}
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
                    title={`${product.name} - ${t('products.video')} ${currentVideoIndex + 1}`}
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
            <FormattedDescription 
              text={t(`products.descriptions.${brand.id}.${product.localeKey || product.name.toLowerCase().replace(/\s+/g, '')}`)}
              sx={{ mb: 4 }}
            />
            
            <Paper sx={{ p: 4 }}>
              <Typography variant="h6" gutterBottom>
                {t('products.specifications')}
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
                    {t('products.modelSpecifications')}
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