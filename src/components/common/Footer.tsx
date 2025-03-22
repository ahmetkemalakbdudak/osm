import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  WhatsApp as WhatsAppIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
} from '@mui/icons-material';

function Footer() {
  const theme = useTheme();
  const navigate = useNavigate();

  const brands = [
    { name: 'Caldini', path: '/brands/caldini' },
    { name: 'Pax', path: '/brands/pax' },
    { name: 'Automec', path: '/brands/automec' },
  ];

  const contactInfo = {
    whatsapp: '+36 30 124 0003',
    email: 'osmautomec@gmail.com',
    phone: '+36 30 124 0003',
    address: 'AUTOMEC Ipari Berendezések Kft., 1103 Budapest, Gyömrői út 115. Start Center Business Park/101',
  };

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
              Automec
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Leading provider of innovative technology solutions for businesses worldwide.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Our Brands
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
              Contact
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
          © {new Date().getFullYear()} Automec. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer; 