import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../layouts/PrivateRoute';
import MainLayout from '../layouts/MainLayout'; // Import du layout

// Pages publiques
import Home from '../pages/user/Home';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

// Pages admin
import Dashboard from '../pages/admin/Dashboard';
import AdminArticles from '../pages/admin/Articles';
import Article from '../pages/user/Article';
import Apropos from '../pages/user/Apropos';
import Contact from '../pages/user/Contact';
import { HelmetProvider } from 'react-helmet-async';

function AppRouter() {
  return (
    <Routes>
      {/* Routes publiques avec MainLayout */}
      {/* <Route element={<MainLayout />}> */}
      <Route element={
        <HelmetProvider>
          <MainLayout />
        </HelmetProvider>
      }>
      
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />


        {/* auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Routes admin avec protection */}
      <Route path="/admin" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/admin/articles" element={<PrivateRoute><AdminArticles /></PrivateRoute>} />
    </Routes>
  );
}

export default AppRouter;
