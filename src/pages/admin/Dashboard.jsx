import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    const toggleBtn = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    const toggleSidebar = () => {
      sidebar.classList.toggle("active");
      overlay.classList.toggle("active");
    };

    toggleBtn?.addEventListener("click", toggleSidebar);
    overlay?.addEventListener("click", toggleSidebar);

    return () => {
      toggleBtn?.removeEventListener("click", toggleSidebar);
      overlay?.removeEventListener("click", toggleSidebar);
    };
  }, []);

  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
          font-family: sans-serif;
          box-sizing: border-box;
        }

        *, *::before, *::after {
          box-sizing: inherit;
        }

        .sidebar {
          height: 100vh;
          width: 250px;
          position: fixed;
          top: 0;
          left: 0;
          background-color: #343a40;
          padding-top: 60px;
          z-index: 1050;
          transition: all 0.3s ease;
        }

        .sidebar a {
          color: #fff;
          padding: 15px;
          display: block;
          text-decoration: none;
        }

        .sidebar a:hover {
          background-color: #495057;
        }

        .content {
          margin-left: 250px;
          padding: 20px;
          width: calc(100vw - 250px);
          min-height: 100vh;
          background-color: #f8f9fa;
          overflow-x: hidden;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1100;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1040;
          display: none;
        }

        .overlay.active {
          display: block;
        }

        @media (max-width: 768px) {
          .sidebar {
            left: -250px;
          }

          .sidebar.active {
            left: 0;
          }

          .content {
            margin-left: 0;
            width: 100vw;
          }
        }
      `}</style>

      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="btn btn-outline-light d-md-none" id="menu-toggle">
            <i className="fas fa-bars"></i>
          </button>
          <span className="navbar-brand ms-2">Admin Dashboard</span>
        </div>
      </nav>

      {/* Sidebar */}
      <div className="sidebar" id="sidebar">
        <a href="#"><i className="fas fa-tachometer-alt me-2"></i> Dashboard</a>
        <a href="#"><i className="fas fa-users me-2"></i> Utilisateurs</a>
        <a href="#"><i className="fas fa-box-open me-2"></i> Produits</a>
        <a href="#"><i className="fas fa-chart-line me-2"></i> Statistiques</a>
        <a href="#"><i className="fas fa-cog me-2"></i> Paramètres</a>
        <a href="#"><i className="fas fa-sign-out-alt me-2"></i> Déconnexion</a>
      </div>

      {/* Overlay */}
      <div className="overlay d-md-none" id="overlay"></div>

      {/* Content */}
      <div className="content">
        <div className="container-fluid mt-5 pt-4">
          <h2>Bienvenue sur le tableau de bord</h2>
          <p>Interface admin responsive avec Bootstrap et FontAwesome.</p>

          <div className="row">
            <div className="col-md-4">
              <div className="card text-white bg-primary mb-3">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-user"></i> Utilisateurs
                  </h5>
                  <p className="card-text">120 inscrits</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-white bg-success mb-3">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-box"></i> Produits
                  </h5>
                  <p className="card-text">85 disponibles</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-white bg-warning mb-3">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-shopping-cart"></i> Commandes
                  </h5>
                  <p className="card-text">45 en cours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Dernières activités</h5>
                </div>
                <div className="card-body">
                  <p>Liste des dernières activités...</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Statistiques</h5>
                </div>
                <div className="card-body">
                  <p>Graphiques et statistiques...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
