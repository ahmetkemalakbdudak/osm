import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { CircularProgress, Box } from '@mui/material';
import MainLayout from './layouts/MainLayout';

// Lazy load pages
const Home = lazy(() => import('./pages/home/Home'));
const BrandPage = lazy(() => import('./pages/brands/BrandPage'));
const ProductPage = lazy(() => import('./pages/products/ProductPage'));
const Contact = lazy(() => import('./pages/contact/Contact'));

// Loading component
const LoadingFallback = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
    <CircularProgress />
  </Box>
);

function Router() {
  return (
    <MainLayout>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brands/:brandName" element={<BrandPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
}

export default Router; 