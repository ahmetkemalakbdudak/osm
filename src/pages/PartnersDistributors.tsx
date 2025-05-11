import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Link as MuiLink,
} from '@mui/material';

const PartnersDistributors: React.FC = () => {
  const { t } = useTranslation();

  const partners = [
    {
      country: 'Austria',
      name: 'Autostil Autowäsche',
      phone: '+43 699 18124744',
    },
    {
      country: 'Bosnia Hercegovina',
      name: 'SIM Impex',
      link: 'https://simimpex.ba/',
      phone: '+387 65 684 551',
    },
    {
      country: 'Bulgaria',
      name: 'INTERTECHNIK BULGARIA Ltd.',
      link: 'https://profi.bg/',
    },
    {
      country: 'Hungary',
      name: 'Neo Lincos Zrt',
      link: 'https://lincos.hu/hu',
    },
    {
      country: 'Italy',
      name: 'Nicola Canosa',
      link: 'https://www.megaservice1.it/',
      email: 'ni.ca.rep@gmail.com',
      phone: '+39 348 250 3737',
    },
    {
      country: 'Kosovo',
      phone: '+383 45 646 846',
    },
    {
      country: 'Serbia',
      name: 'Autosfera doo',
      link: 'https://www.autosfera.rs/',
      phone: '+381 693327904',
    },
    {
      country: 'Spain',
      name: 'Camiocar S.L.',
      link: 'https://www.camiocar.com/',
      phone: '+34 617 04 2861',
    },
    {
      country: 'Sweden',
      name: 'Sipomax Bilvårdsprodukter Och Maskiner Ab',
      link: 'https://sipomax.se/',
      phone: '+46 70 015 15 45',
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box py={8}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          {t('partners_distributors.title')}
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
          {t('partners_distributors.find_representative')}
        </Typography>

        <Grid container spacing={4}>
          {partners.map((partner) => (
            <Grid item xs={12} sm={6} md={4} key={partner.country}>
              <Paper sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {partner.country}
                </Typography>
                {partner.name && (
                  <Typography variant="body1" color="text.secondary" gutterBottom>
                    {partner.name}
                  </Typography>
                )}
                {partner.link && (
                  <Typography variant="body1" gutterBottom>
                    <MuiLink href={partner.link} target="_blank" rel="noopener noreferrer" underline="hover">
                      {partner.link}
                    </MuiLink>
                  </Typography>
                )}
                {partner.email && (
                  <Typography variant="body1" color="text.secondary" gutterBottom>
                    {partner.email}
                  </Typography>
                )}
                {partner.phone && (
                  <Typography variant="body1" color="text.secondary">
                    {partner.phone}
                  </Typography>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default PartnersDistributors; 