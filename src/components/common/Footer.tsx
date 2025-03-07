import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const brands = [
    { name: 'Caldini', path: '/brands/caldini' },
    { name: 'Pax', path: '/brands/pax' },
    { name: 'Automec', path: '/brands/automec' },
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
              TechBrands
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
                  variant="body2"
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
            <Typography variant="body2" color="text.secondary">
              Email: contact@techbrands.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 890
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Address: 123 Tech Street, Innovation City
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} TechBrands. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer; 