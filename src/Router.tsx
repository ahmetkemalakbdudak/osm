import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { CircularProgress, Box } from '@mui/material';
import MainLayout from './layouts/MainLayout';

// Lazy load pages
const Home = lazy(() => import('./pages/home/Home'));
const BrandPage = lazy(() => import('./pages/brands/BrandPage'));
const ProductPage = lazy(() => import('./pages/products/ProductPage'));
const ProductCategoryPage = lazy(() => import('./pages/products/ProductCategoryPage'));
const Contact = lazy(() => import('./pages/contact/Contact'));
const About = lazy(() => import('./pages/about/About'));
const PartnersDistributors = lazy(() => import('./pages/PartnersDistributors'));

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
          <Route path="/products/:productName" element={<ProductPage />} />
          <Route path="/products/category/:categoryName" element={<ProductCategoryPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners-distributors" element={<PartnersDistributors />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
}

export default Router; 