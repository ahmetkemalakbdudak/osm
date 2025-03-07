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
    whatsapp: '+90 555 123 4567',
    email: 'info@techbrands.com',
    phone: '+90 212 123 4567',
    address: 'Merkez Mah. Teknoloji Cad. No:1, Istanbul, Turkey',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.443827567115!2d28.97206661573761!3d41.02557897929954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e7a7777c43%3A0x4c76cf3dcc8b330b!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2sus!4v1620147382897!5m2!1sen!2sus',
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