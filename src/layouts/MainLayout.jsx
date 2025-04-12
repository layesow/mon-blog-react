// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import "../styles/public.css"; // Ton CSS public (bootstrap, font-awesome, etc.)

const MainLayout = () => {
  return (
    <>
      <header>{/* navbar */}</header>
      <main>
        <Outlet />
      </main>
      <footer>{/* footer */}</footer>
    </>
  );
};

export default MainLayout;
