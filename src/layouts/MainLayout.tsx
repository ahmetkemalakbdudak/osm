import { Box } from '@mui/material';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box component="main" flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export default MainLayout; 