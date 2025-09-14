import React, { useState } from 'react';
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
  Collapse,
  ListItemIcon,
} from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Description as DescriptionIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import automecLogo from '../../assets/automec-logo-transparent.png';
import { ProductCategory } from '../../data/brands';

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

interface CategoryMenuItem extends MenuItem {
  category: ProductCategory;
}

interface MenuItems {
  brands: MenuItem[];
  products: CategoryMenuItem[];
  documents: MenuItem[];
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
    { label: 'brands.automec.name', path: '/brands/automec' },
    { label: 'brands.pax.name', path: '/brands/pax' },
    { label: 'brands.caldini.name', path: '/brands/caldini' },
    { label: 'brands.gulersan.name', path: '/brands/gulersan' },
  ],
  products: [
    { label: 'categories.garage', path: '/products/category/garage', category: 'garage' },
    { label: 'categories.carWash', path: '/products/category/carWash', category: 'carWash' },
    { label: 'categories.aerosol', path: '/products/category/aerosol', category: 'aerosol' },
    { label: 'categories.lubricationEquipment', path: '/products/category/lubricationEquipment', category: 'lubricationEquipment' },
    { label: 'categories.handTools', path: '/products/category/handTools', category: 'handTools' },
  ],
  documents: [
    { label: 'documents.ad3030', path: '/docs/AD3030 DPF Cleaning Machine Technical Specifications2 (1).pdf', icon: DescriptionIcon },
    { label: 'documents.fdt4000', path: '/docs/FDT4000 USER GUIDE.pdf', icon: DescriptionIcon },
    { label: 'documents.fdt4000_ro', path: '/docs/ROMANIAN De Utilizare Al Fdt4000.pdf', icon: DescriptionIcon },
  ],
};

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  
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

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setLanguageAnchor(null);
  };

  const handleNavigate = (path: string) => {
    if (path.startsWith('/docs/')) {
      // For PDFs, use the 'download' attribute to force inline display
      const pdfLink = document.createElement('a');
      pdfLink.href = path;
      pdfLink.target = '_blank';
      pdfLink.rel = 'noopener noreferrer';
      
      // Add an attribute to encourage inline viewing
      pdfLink.setAttribute('type', 'application/pdf');
      
      // Trigger click
      document.body.appendChild(pdfLink);
      pdfLink.click();
      document.body.removeChild(pdfLink);
    } else {
      navigate(path);
    }
    setMobileMenuOpen(false);
    Object.keys(menuAnchors).forEach(menu => handleMenuClose(menu));
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const socialMedia = [
    { name: 'Facebook', icon: FacebookIcon, url: 'https://www.facebook.com/automeceu' },
    { name: 'YouTube', icon: YouTubeIcon, url: 'https://www.youtube.com/@automecosmotomotiv3257' },
    { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/automec_eu/' },
  ];

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLDivElement>, menu: string) => {
    setMobileMenuOpen(true);
    handleMenuClick(event, menu);
  };

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
                      padding: '6px 16px',
                    }}
                  >
                    {t(`menu.${menu}`)}
                  </Button>
                  <Menu
                    anchorEl={menuAnchors[menu]}
                    open={Boolean(menuAnchors[menu])}
                    onClose={() => handleMenuClose(menu)}
                    sx={{ mt: 1 }}
                  >
                    {items.map((item: MenuItem) => (
                      <MenuItem
                        key={item.path}
                        onClick={() => handleNavigate(item.path)}
                        sx={{ 
                          minWidth: 280,
                          gap: 1,
                        }}
                      >
                        {item.icon && <item.icon fontSize="small" />}
                        {t(item.label)}
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
                  padding: '6px 16px',
                }}
              >
                {t('common.aboutUs')}
              </Button>
              <Button
                color="inherit"
                onClick={() => handleNavigate('/contact')}
                sx={{
                  textTransform: 'capitalize',
                  fontSize: '1rem',
                  padding: '6px 16px',
                }}
              >
                {t('common.contactUs')}
              </Button>
              <Button
                color="inherit"
                onClick={() => handleNavigate('/partners-distributors')}
                sx={{
                  textTransform: 'capitalize',
                  fontSize: '1rem',
                  padding: '6px 16px',
                }}
              >
                {t('header.partners_distributors')}
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
                onClick={() => handleLanguageChange(lang.code)}
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
                  <React.Fragment key={menu}>
                    <ListItemButton
                      onClick={(event: React.MouseEvent<HTMLDivElement>) => handleMobileMenuOpen(event, menu)}
                      sx={{ pl: 2, justifyContent: 'space-between' }}
                    >
                      <ListItemText primary={t(`menu.${menu}`)} />
                      {menuAnchors[menu] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </ListItemButton>
                    <Collapse in={Boolean(menuAnchors[menu])} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {items.map((item: MenuItem) => (
                      <ListItemButton
                        key={item.path}
                        sx={{ pl: 4 }}
                            onClick={() => {
                              handleNavigate(item.path);
                              setMobileMenuOpen(false);
                            }}
                      >
                            {item.icon && <ListItemIcon><item.icon fontSize="small" /></ListItemIcon>}
                        <ListItemText primary={t(item.label)} />
                      </ListItemButton>
                    ))}
                      </List>
                    </Collapse>
                  </React.Fragment>
                ))}

                <ListItemButton onClick={() => { handleNavigate('/about'); setMobileMenuOpen(false); }} sx={{ pl: 2 }}>
                  <ListItemText primary={t('common.aboutUs')} />
                </ListItemButton>
                <ListItemButton onClick={() => { handleNavigate('/contact'); setMobileMenuOpen(false); }} sx={{ pl: 4 }}>
                  <ListItemText primary={t('common.contactUs')} />
                </ListItemButton>
                <ListItemButton onClick={() => handleNavigate('/partners-distributors')} sx={{ pl: 4 }}>
                  <ListItemText primary={t('header.partners_distributors')} />
                </ListItemButton>
              </List>
            </Box>
          </Drawer>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 