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
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
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
  
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const columns = isMdUp ? 3 : isSmUp ? 2 : 1;

  const { product, brand } = productName ? findProductAndBrand(productName) : { product: null, brand: null };

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
              const lowerProductName = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '');
              
              // Debug: Log path matching
              console.log('Checking path:', {
                path: lowerPath,
                brandMatch: lowerPath.includes(lowerBrandName.toLowerCase()),
                productMatch: lowerPath.includes(lowerProductName.toLowerCase())
              });
              
              return lowerPath.includes(lowerBrandName.toLowerCase()) && 
                     path.toLowerCase().includes(lowerProductName.toLowerCase());
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
            <Box
              component="img"
              src={productImages[0] || product.image}
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
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h1" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              {product.description}
            </Typography>

            <Box mt={4}>
              <Typography variant="h6" gutterBottom>
                Key Features
              </Typography>
              <Box display="flex" flexWrap="wrap" gap={1.5}>
                {product.features.slice(0, 2).map((feature, _index) => (
                  <Chip
                    key={_index}
                    label={feature}
                    variant="outlined"
                    sx={{
                      bgcolor: 'background.paper',
                      fontSize: '1rem',
                      py: 2.5,
                      height: 'auto',
                    }}
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
            </Box>
          </Grid>

          {productImages.length > 1 && (
            <Grid item xs={12}>
              <Paper sx={{ p: 4, mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Product Gallery
                </Typography>
                <ImageList variant="masonry" cols={columns} gap={16}>
                  {productImages.slice(1).map((image, index) => (
                    <ImageListItem key={index}>
                      <img
                        src={image}
                        alt={`${product.name} - Image ${index + 2}`}
                        loading="lazy"
                        style={{
                          borderRadius: 8,
                          width: '100%',
                          aspectRatio: '4/3',
                          objectFit: 'contain',
                          backgroundColor: 'white',
                        }}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Paper>
            </Grid>
          )}

          <Grid item xs={12}>
            <Paper sx={{ p: 4, mt: 4 }}>
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