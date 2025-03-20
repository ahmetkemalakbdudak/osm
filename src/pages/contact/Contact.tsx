import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  Link,
  Stack,
} from '@mui/material';
import {
  WhatsApp as WhatsAppIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
} from '@mui/icons-material';

function Contact() {
  const contactInfo = {
    whatsapp: '+36 30 124 0003',
    email: 'osmautomec@gmail.com',
    phone: '+36 30 124 0003',
    address: 'AUTOMEC Ipari Berendezések Kft., 1103 Budapest, Gyömrői út 115. Start Center Business Park/101',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11069.595180122315!2d19.143364121306266!3d47.46730663883507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c37bd223f27d%3A0xd06be78c858fd328!2sAutomec%20Ipari%20Berendezesek%20Kft.!5e1!3m2!1sen!2str!4v1742481809970!5m2!1sen!2str',
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

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
          Contact Us
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
        >
          Get in touch with our team for expert advice and support
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, height: '100%' }}>
              <Stack spacing={4}>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Direct Contact
                  </Typography>
                  <Stack spacing={2}>
                    <Button
                      variant="contained"
                      startIcon={<WhatsAppIcon />}
                      onClick={handleWhatsAppClick}
                      sx={{
                        bgcolor: '#25D366',
                        '&:hover': { bgcolor: '#128C7E' },
                      }}
                    >
                      Chat on WhatsApp
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<EmailIcon />}
                      onClick={handleEmailClick}
                      sx={{ bgcolor: '#EA4335', '&:hover': { bgcolor: '#B31412' } }}
                    >
                      Send Email
                    </Button>
                  </Stack>
                </Box>

                <Box>
                  <Typography variant="h6" gutterBottom>
                    Contact Details
                  </Typography>
                  <Stack spacing={2}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <PhoneIcon color="primary" />
                      <Link
                        href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                        color="inherit"
                        underline="hover"
                      >
                        {contactInfo.phone}
                      </Link>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                      <EmailIcon color="primary" />
                      <Link
                        href={`mailto:${contactInfo.email}`}
                        color="inherit"
                        underline="hover"
                      >
                        {contactInfo.email}
                      </Link>
                    </Box>
                    <Box display="flex" gap={1}>
                      <LocationOnIcon color="primary" sx={{ mt: 0.5 }} />
                      <Typography>
                        {contactInfo.address}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>

                <Box>
                  <Typography variant="h6" gutterBottom>
                    Business Hours
                  </Typography>
                  <Typography>
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </Typography>
                  <Typography>
                    Saturday: 10:00 AM - 2:00 PM
                  </Typography>
                  <Typography>
                    Sunday: Closed
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 0, height: '100%', minHeight: 450 }}>
              <Box
                component="iframe"
                src={contactInfo.mapUrl}
                sx={{
                  border: 0,
                  width: '100%',
                  height: '100%',
                  minHeight: 450,
                  borderRadius: 1,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Contact; 