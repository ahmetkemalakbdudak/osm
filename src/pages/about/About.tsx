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
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  const values = [
    {
      icon: EngineeringIcon,
      title: t('about.values.technicalExcellence.title'),
      description: t('about.values.technicalExcellence.description'),
    },
    {
      icon: HandshakeIcon,
      title: t('about.values.customerPartnership.title'),
      description: t('about.values.customerPartnership.description'),
    },
    {
      icon: VerifiedIcon,
      title: t('about.values.qualityAssurance.title'),
      description: t('about.values.qualityAssurance.description'),
    },
    {
      icon: TimelineIcon,
      title: t('about.values.innovationFocus.title'),
      description: t('about.values.innovationFocus.description'),
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box py={8}>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
        >
          {t('about.title')}
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>
              {t('about.ourStory')}
            </Typography>
            <Typography paragraph>
              {t('about.story.part1')}
            </Typography>
            <Typography paragraph>
              {t('about.story.part2')}
            </Typography>
            <Typography>
              {t('about.story.part3')}
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 2, fontStyle: 'italic' }}>
              {t('about.story.sincerely')}
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h3" align="center" gutterBottom>
            {t('about.values.title')}
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
              {t('about.mission.title')}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: 'auto' }}
            >
              {t('about.mission.description')}
            </Typography>
          </Container>
        </Box>
      </Box>
    </Container>
  );
}

export default About; 