import { Container, Typography, Box, Button, Grid, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';

// Import brand logos
import caldiniLogo from '../../assets/caldini.png';
import paxLogo from '../../assets/pax.png';
import automecLogo from '../../assets/automec-logo-transparent.png';
import heroBackground from '../../assets/hero-background.jpg';

const features = [
  'Rigorous quality control',
  'Competitive pricing',
  'Exceptional customer service',
  'Comprehensive solutions',
];

const brands = [
  {
    id: 'automec',
    name: 'Automec',
    logo: automecLogo,
    description: 'Professional Car Service & Garage Equipment',
  },
  {
    id: 'pax',
    name: 'Pax',
    logo: paxLogo,
    description: 'Car Wash and Industrial Cleaning Equipment',
  },
  {
    id: 'caldini',
    name: 'Caldini',
    logo: caldiniLogo,
    description: 'Professional Aerosol Products',
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography
                variant="h5"
                sx={{ mb: 4, lineHeight: 1.5, color: 'rgba(255, 255, 255, 0.9)' }}
              >
                Main distributor of Automec Professional Service & Garage Equipment in EU region as well as distributor of PAX Industrial Cleaning Machines and Caldini Aeresol.
              </Typography>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/contact')}
                sx={{ 
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                Contact Us
              </Button>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src={automecLogo}
                alt="Automec"
                sx={{
                  width: '100%',
                  maxHeight: 120,
                  objectFit: 'contain',
                  display: 'block',
                  filter: 'brightness(0) invert(1)', // Make logo white
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Brands Preview Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{ mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}
          >
            Our Brands
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
          >
            Discover our premium selection of automotive equipment brands
          </Typography>
          <Grid container spacing={4}>
            {brands.map((brand) => (
              <Grid item xs={12} md={4} key={brand.id}>
                <Box
                  sx={{
                    p: 3,
                    bgcolor: 'background.default',
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.2s',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                  onClick={() => navigate(`/brands/${brand.id}`)}
                >
                  <Box
                    component="img"
                    src={brand.logo}
                    alt={brand.name}
                    sx={{
                      width: '100%',
                      height: 200,
                      objectFit: 'contain',
                      mb: 2,
                    }}
                  />
                  <Typography variant="h4" gutterBottom sx={{ textTransform: 'capitalize' }}>
                    {brand.name}
                  </Typography>
                  <Typography color="text.secondary">
                    {brand.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Container maxWidth="lg">
        <Box py={8}>
          <Typography
            variant="h2"
            align="center"
            sx={{ mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}
          >
            Why Choose Our Partners?
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
          >
            Our carefully selected partners provide the highest quality products and services to meet your business needs.
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {features.map((feature) => (
              <Grid item xs={12} sm={6} md={3} key={feature}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  sx={{
                    p: 2,
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    height: '100%',
                  }}
                >
                  <CheckCircleIcon color="primary" sx={{ fontSize: 24 }} />
                  <Typography variant="h6">{feature}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Home; 