import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
} from '@mui/material';
import {
  Engineering as EngineeringIcon,
  Handshake as HandshakeIcon,
  Verified as VerifiedIcon,
  Timeline as TimelineIcon,
} from '@mui/icons-material';

function About() {
  const values = [
    {
      icon: EngineeringIcon,
      title: 'Technical Excellence',
      description: 'We provide cutting-edge automotive equipment and solutions backed by years of engineering expertise.',
    },
    {
      icon: HandshakeIcon,
      title: 'Customer Partnership',
      description: 'We build long-term relationships with our customers, providing ongoing support and consultation.',
    },
    {
      icon: VerifiedIcon,
      title: 'Quality Assurance',
      description: 'All our products undergo rigorous testing and certification to meet international standards.',
    },
    {
      icon: TimelineIcon,
      title: 'Innovation Focus',
      description: 'We continuously invest in R&D to bring the latest technological advancements to our customers.',
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box py={8}>
        <Typography
          variant="h1"
          align="center"
          sx={{
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 700,
            mb: 2,
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
        >
          Leading provider of premium automotive equipment solutions since 2010
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Our Story
            </Typography>
            <Typography paragraph>
              TechBrands was founded with a vision to revolutionize the automotive equipment industry by providing high-quality, innovative solutions to automotive professionals worldwide.
            </Typography>
            <Typography paragraph>
              Over the years, we've built strong partnerships with leading manufacturers and developed our own cutting-edge products, establishing ourselves as a trusted name in the industry.
            </Typography>
            <Typography>
              Today, we serve thousands of customers across multiple countries, helping them improve their efficiency and deliver better service to their clients through our advanced automotive solutions.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/about-image.jpg"
              alt="About Us"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h3" align="center" gutterBottom>
            Our Values
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <value.icon
                    sx={{
                      fontSize: 48,
                      color: 'primary.main',
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {value.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mt: 8, bgcolor: 'background.paper', py: 6, borderRadius: 2 }}>
          <Container maxWidth="md">
            <Typography variant="h3" align="center" gutterBottom>
              Our Mission
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: 'auto' }}
            >
              To empower automotive businesses with innovative equipment solutions that enhance their productivity, reliability, and customer satisfaction.
            </Typography>
          </Container>
        </Box>
      </Box>
    </Container>
  );
}

export default About; 