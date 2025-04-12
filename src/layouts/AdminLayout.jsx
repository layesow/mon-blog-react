// src/layouts/AdminLayout.jsx
import { Outlet } from "react-router-dom";
import "../styles/admin.css"; // Ton CSS admin

const AdminLayout = () => {
  return (
    <div className="admin-container">
      <aside>{/* Sidebar admin */}</aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
