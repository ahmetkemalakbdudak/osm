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
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { brands } from '../../data/brands';

function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const theme = useTheme();
  
  const product = Object.values(brands)
    .flatMap(brand => brand.products)
    .find(p => p.id === Number(productId));

  const brand = product 
    ? Object.values(brands).find(b => b.products.some(p => p.id === Number(productId)))
    : null;

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
              src={product.image}
              alt={product.name}
              sx={{
                width: '100%',
                borderRadius: 2,
                boxShadow: theme.shadows[4],
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
                {product.features.map((feature, index) => (
                  <Chip
                    key={index}
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
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 4, mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Technical Specifications
              </Typography>
              <TableContainer>
                <Table>
                  <TableBody>
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <TableRow
                        key={key}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ 
                            width: '30%',
                            fontWeight: 'bold',
                            color: 'text.primary',
                          }}
                        >
                          {key}
                        </TableCell>
                        <TableCell>{value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default ProductPage; 