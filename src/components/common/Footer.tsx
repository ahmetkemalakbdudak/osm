import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  useTheme,
  Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  WhatsApp as WhatsAppIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
} from '@mui/icons-material';

function Footer() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const brands = [
    { name: t('brands.automec.name'), path: '/brands/automec' },
    { name: t('brands.pax.name'), path: '/brands/pax' },
    { name: t('brands.caldini.name'), path: '/brands/caldini' },
  ];

  const contactInfo = {
    whatsapp: '+36 30 124 0003',
    email: 'osmautomec@gmail.com',
    phone: '+36 30 124 0003',
    address: t('contact.address'),
  };

  const socialMedia = [
    { name: 'Facebook', icon: FacebookIcon, url: 'https://www.facebook.com/automeceu' },
    { name: 'YouTube', icon: YouTubeIcon, url: 'https://www.youtube.com/@automecosmotomotiv3257' },
    { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/automec_eu' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {t('brands.automec.name')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('brands.automec.description')}
            </Typography>
            <Box mt={2}>
              <Typography variant="subtitle2" color="text.primary" gutterBottom>
                {t('common.followUs')}
              </Typography>
              <Stack direction="row" spacing={1}>
                {socialMedia.map((social) => (
                  <Link 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    <social.icon />
                  </Link>
                ))}
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {t('common.ourBrands')}
            </Typography>
            <Box>
              {brands.map((brand) => (
                <Link
                  key={brand.path}
                  component="button"
                  variant="button"
                  onClick={() => navigate(brand.path)}
                  sx={{
                    display: 'block',
                    mb: 1,
                    color: 'text.secondary',
                    textAlign: 'left',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {brand.name}
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {t('common.contactUs')}
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <Box display="flex" alignItems="center" gap={1}>
                <PhoneIcon fontSize="small" color="primary" />
                <Link
                  href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                  color="text.secondary"
                  underline="hover"
                >
                  {contactInfo.phone}
                </Link>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <WhatsAppIcon fontSize="small" color="primary" />
                <Link
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`}
                  color="text.secondary"
                  underline="hover"
                  target="_blank"
                >
                  {contactInfo.whatsapp}
                </Link>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <EmailIcon fontSize="small" color="primary" />
                <Link
                  href={`mailto:${contactInfo.email}`}
                  color="text.secondary"
                  underline="hover"
                >
                  {contactInfo.email}
                </Link>
              </Box>
              <Box display="flex" gap={1}>
                <LocationOnIcon fontSize="small" color="primary" sx={{ mt: 0.5 }} />
                <Typography variant="body2" color="text.secondary">
                  {contactInfo.address}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} {t('brands.automec.name')}. {t('common.allRightsReserved')}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer; 