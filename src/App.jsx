// App.jsx
import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeLanding from './pages/HomeLanding';
import MyListings from './pages/MyListings';
import SwapRequests from './pages/SwapRequests';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProductDesign from './pages/ProductDesign';
import AdminPanel from './pages/AdminPanel';
import Loading from './pages/loading';
import Donation from './pages/Donation';

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup'];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomeLanding />} />
        <Route path="/swap-requests" element={<SwapRequests />} />
        <Route path="/my-listings" element={<MyListings />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/product-design" element={<ProductDesign />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/donate" element={<Donation />} />
      </Routes>
    </>
  );
}

export default App;
