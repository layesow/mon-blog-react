import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../layouts/AdminLayout';

// Pages utilisateur
import Home from '../pages/user/Home';


// Pages admin
import Dashboard from '../pages/admin/Dashboard';

function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Routes utilisateur */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/article/:id" element={<ArticleDetails />} />
          <Route path="/categorie/:id" element={<ArticlesByCategory />} />
          <Route path="/tag/:id" element={<ArticlesByTag />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/inscription" element={<Register />} /> */}
        </Route>

        {/* Routes admin */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Dashboard />} />
          {/* <Route path="/admin/utilisateurs" element={<Users />} />
          <Route path="/admin/ajouter-utilisateur" element={<AddUser />} />
          <Route path="/admin/articles" element={<Articles />} />
          <Route path="/admin/ajouter-article" element={<AddArticle />} />
          <Route path="/admin/modifier-article/:id" element={<EditArticle />} />
          <Route path="/admin/categories" element={<Categories />} />
          <Route path="/admin/tags" element={<Tags />} />
          <Route path="/admin/commentaires" element={<Comments />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
