import { Container, Typography, Box, Button, Grid, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowForward as ArrowForwardIcon, CheckCircle as CheckCircleIcon } from '@mui/icons-material';

// Import brand logos
import caldiniLogo from '../../assets/caldini.png';
import paxLogo from '../../assets/pax.png';
import automecLogo from '../../assets/automec.png';

const features = [
  'Rigorous quality control',
  'Competitive pricing',
  'Exceptional customer service',
  'Comprehensive solutions',
];

const brands = [
  {
    id: 'caldini',
    name: 'Caldini',
    logo: caldiniLogo,
    description: 'Premium automotive diagnostic and repair equipment',
  },
  {
    id: 'pax',
    name: 'Pax',
    logo: paxLogo,
    description: 'Innovative lifting and maintenance equipment',
  },
  {
    id: 'automec',
    name: 'Automec',
    logo: automecLogo,
    description: 'Cutting-edge automotive service equipment for professional workshops',
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Container maxWidth="lg">
        <Box py={8}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                <Box component="span" color="primary.main">Auto</Box>mec
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ mb: 4, lineHeight: 1.5 }}
              >
                EU branch of AUTOMEC Automotive Service Equipment, established in 2023. General distributors of PAX Industrial Cleaning Equipment and Caldini Aerosol products.
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/brands/caldini')}
                sx={{ mr: 2 }}
              >
                Explore Products
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/hero-image.jpg"
                alt="Automotive Equipment"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>

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

      {/* Products Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{ mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}
            align="center"
          >
            Explore Our Premium Products
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}
            align="center"
          >
            Discover our extensive catalog of high-quality automotive equipment designed to meet your business needs.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate('/brands/caldini')}
            >
              View Products
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/contact')}
            >
              Contact Sales
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Home; 