import { Container, Typography, Box, Button, Grid, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

// Import brand logos
import caldiniLogo from '../../assets/caldini.png';
import paxLogo from '../../assets/pax.png';
import automecLogo from '../../assets/automec-logo-transparent.png';
import gulersanLogo from '../../assets/gulersan.png';
import heroBackground from '../../assets/hero-background-optimized.jpg';

const features = [
  'qualityControl',
  'pricing',
  'customerService',
  'solutions',
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
  {
    id: 'gulersan',
    name: 'Gulersan',
    logo: gulersanLogo,
    description: 'Lubrication Equipment',
  },
];

function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
                {t('home.hero.title')}
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
                {t('home.hero.contactUs')}
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
            {t('home.brands.title')}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
          >
            {t('home.brands.subtitle')}
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
                    {t(`brands.${brand.id}.name`)}
                  </Typography>
                  <Typography color="text.secondary">
                    {t(`brands.${brand.id}.description`)}
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
            {t('home.whyChooseUs.title')}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
          >
            {t('home.whyChooseUs.subtitle')}
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
                  <Typography variant="h6">{t(`home.whyChooseUs.features.${feature}`)}</Typography>
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