import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Container,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  SvgIconTypeMap,
  Link,
} from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Description as DescriptionIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import automecLogo from '../../assets/automec-logo-transparent.png';

interface Language {
  code: string;
  label: string;
  shortLabel: string;
  flag: string;
}

interface MenuItem {
  label: string;
  path: string;
  icon?: OverridableComponent<SvgIconTypeMap>;
}

interface MenuItems {
  [key: string]: MenuItem[];
}

const languages: Language[] = [
  { 
    code: 'en',
    label: 'English',
    shortLabel: 'EN',
    flag: '🇬🇧'
  },
  { 
    code: 'de',
    label: 'Deutsch',
    shortLabel: 'DE',
    flag: '🇩🇪'
  },
  { 
    code: 'tr',
    label: 'Türkçe',
    shortLabel: 'TR',
    flag: '🇹🇷'
  },
  { 
    code: 'hu',
    label: 'Magyar',
    shortLabel: 'HU',
    flag: '🇭🇺'
  },
];

const menuItems: MenuItems = {
  brands: [
    { label: 'Automec', path: '/brands/automec' },
    { label: 'Pax', path: '/brands/pax' },
    { label: 'Caldini', path: '/brands/caldini' },
  ],
  products: [
    { label: 'Car Service & Garage Equipment', path: '/brands/automec' },
    { label: 'Car Wash and Industrial Cleaning Equipment', path: '/brands/pax' },
    { label: 'Aerosol Products', path: '/brands/caldini' },
  ],
  documents: [
    { label: 'AD3030 DPF Cleaning Machine Specs', path: '/assets/docs/AD3030 DPF Cleaning Machine Technical Specifications2 (1).pdf', icon: DescriptionIcon },
    { label: 'FDT4000 User Guide', path: '/assets/docs/FDT4000 USER GUIDE.pdf', icon: DescriptionIcon },
    { label: 'FDT4000 Manual (Romanian)', path: '/assets/docs/ROMANIAN De Utilizare Al Fdt4000.pdf', icon: DescriptionIcon },
  ],
};

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  
  const [languageAnchor, setLanguageAnchor] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuAnchors, setMenuAnchors] = useState<Record<string, HTMLElement | null>>({
    brands: null,
    products: null,
    documents: null,
  });

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, menu: string) => {
    setMenuAnchors({ ...menuAnchors, [menu]: event.currentTarget });
  };

  const handleMenuClose = (menu: string) => {
    setMenuAnchors({ ...menuAnchors, [menu]: null });
  };

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchor(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchor(null);
  };

  const handleLanguageSelect = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    handleLanguageClose();
  };

  const handleNavigate = (path: string) => {
    if (path.startsWith('/assets/docs/')) {
      // Open PDF in the same window using an embedded iframe
      const pdfUrl = path;
      const pdfWindow = window.open('', '_blank');
      if (pdfWindow) {
        pdfWindow.document.write(`
          <html>
            <head>
              <title>PDF Viewer</title>
              <style>
                body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; }
                iframe { width: 100%; height: 100%; border: none; }
              </style>
            </head>
            <body>
              <iframe src="${pdfUrl}" type="application/pdf" width="100%" height="100%"></iframe>
            </body>
          </html>
        `);
      }
    } else {
      navigate(path);
    }
    setMobileMenuOpen(false);
    Object.keys(menuAnchors).forEach(menu => handleMenuClose(menu));
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const socialMedia = [
    { name: 'Facebook', icon: FacebookIcon, url: 'https://www.facebook.com/automeceu' },
    { name: 'YouTube', icon: YouTubeIcon, url: 'https://www.youtube.com/automecosmotomotiv' },
    { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/automeceu' },
  ];

  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 80 }}>
          <Box
            component="img"
            src={automecLogo}
            alt="Automec"
            onClick={() => handleNavigate('/')}
            sx={{ 
              cursor: 'pointer',
              height: 50,
              mr: 4,
              '&:hover': { opacity: 0.8 }
            }}
          />

          {!isMobile && (
            <Stack direction="row" spacing={1} alignItems="center" sx={{ flexGrow: 1 }}>
              {Object.entries(menuItems).map(([menu, items]) => (
                <Box key={menu}>
                  <Button
                    color="inherit"
                    endIcon={<KeyboardArrowDownIcon />}
                    onClick={(e) => handleMenuClick(e, menu)}
                    sx={{ 
                      textTransform: 'capitalize',
                      fontSize: '1rem',
                    }}
                  >
                    {menu}
                  </Button>
                  <Menu
                    anchorEl={menuAnchors[menu]}
                    open={Boolean(menuAnchors[menu])}
                    onClose={() => handleMenuClose(menu)}
                    sx={{ mt: 1 }}
                  >
                    {items.map((item) => (
                      <MenuItem
                        key={item.path}
                        onClick={() => handleNavigate(item.path)}
                        sx={{ 
                          minWidth: menu === 'products' ? 360 : 180,
                          gap: 1,
                        }}
                      >
                        {item.icon && <item.icon fontSize="small" />}
                        {item.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ))}
              <Button
                color="inherit"
                onClick={() => handleNavigate('/about')}
                sx={{ 
                  textTransform: 'capitalize',
                  fontSize: '1rem',
                }}
              >
                About Us
              </Button>
              <Button
                color="inherit"
                onClick={() => handleNavigate('/contact')}
                sx={{ 
                  textTransform: 'capitalize',
                  fontSize: '1rem',
                }}
              >
                Contact
              </Button>
            </Stack>
          )}

          {isMobile ? (
            <>
              <Box sx={{ flexGrow: 1 }} />
              <Stack direction="row" spacing={1} alignItems="center">
                <Stack direction="row" spacing={1} sx={{ mr: 2 }}>
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
                      <social.icon fontSize="small" />
                    </Link>
                  ))}
                </Stack>
                <Button
                  size="small"
                  onClick={handleLanguageClick}
                  sx={{
                    minWidth: 'auto',
                    px: 1,
                    color: 'text.primary',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                  }}
                >
                  <Typography sx={{ fontSize: '1.25rem' }}>{currentLanguage.flag}</Typography>
                  {currentLanguage.shortLabel}
                </Button>
                <IconButton
                  color="inherit"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
              </Stack>
            </>
          ) : (
            <>
              <Stack direction="row" spacing={1} sx={{ mr: 2 }}>
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
                    <social.icon fontSize="small" />
                  </Link>
                ))}
              </Stack>
              <Button
                size="small"
                onClick={handleLanguageClick}
                sx={{
                  minWidth: 'auto',
                  px: 1,
                  color: 'text.primary',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                }}
              >
                <Typography sx={{ fontSize: '1.25rem' }}>{currentLanguage.flag}</Typography>
                {currentLanguage.shortLabel}
              </Button>
            </>
          )}

          <Menu
            anchorEl={languageAnchor}
            open={Boolean(languageAnchor)}
            onClose={handleLanguageClose}
          >
            {languages.map((lang) => (
              <MenuItem
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                selected={i18n.language === lang.code}
                sx={{
                  minWidth: 140,
                  gap: 1,
                }}
              >
                <Typography sx={{ fontSize: '1.25rem', mr: 1 }}>{lang.flag}</Typography>
                <Typography>
                  {lang.label}
                  <Typography
                    component="span"
                    color="text.secondary"
                    sx={{ ml: 1, fontSize: '0.875rem' }}
                  >
                    ({lang.shortLabel})
                  </Typography>
                </Typography>
              </MenuItem>
            ))}
          </Menu>

          <Drawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
          >
            <Box sx={{ width: 300, pt: 2 }}>
              <Box display="flex" justifyContent="flex-end" px={2}>
                <IconButton onClick={() => setMobileMenuOpen(false)}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <List sx={{ px: 2 }}>
                {Object.entries(menuItems).map(([menu, items]) => (
                  <Box key={menu}>
                    <Typography
                      variant="overline"
                      sx={{
                        px: 2,
                        py: 1,
                        display: 'block',
                        color: 'text.secondary',
                      }}
                    >
                      {menu}
                    </Typography>
                    {items.map((item) => (
                      <ListItemButton
                        key={item.path}
                        onClick={() => handleNavigate(item.path)}
                        sx={{ pl: 4 }}
                      >
                        {item.icon && <item.icon fontSize="small" sx={{ mr: 1 }} />}
                        <ListItemText primary={item.label} />
                      </ListItemButton>
                    ))}
                  </Box>
                ))}
                <ListItemButton onClick={() => handleNavigate('/about')}>
                  <ListItemText primary="About Us" />
                </ListItemButton>
                <ListItemButton onClick={() => handleNavigate('/contact')}>
                  <ListItemText primary="Contact" />
                </ListItemButton>

                <Box mt={2}>
                  <Typography
                    variant="overline"
                    sx={{
                      px: 2,
                      py: 1,
                      display: 'block',
                      color: 'text.secondary',
                    }}
                  >
                    Follow Us
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ px: 2, py: 1 }}>
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
                
              </List>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header; 