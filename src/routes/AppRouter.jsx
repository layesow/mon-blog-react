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

function AppRouter() {
  return (
    <Routes>
      {/* Routes publiques avec MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
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
