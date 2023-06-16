import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../hooks/common";

const Nav = () => {
  const { isLoggedIn, logout } = useAppContext();
  const navigate = useNavigate();
  const handleOnLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to="/">
          Zenclu
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {isLoggedIn && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <Link className="nav-link" to="/courses">
                  Enseña con nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/learning">
                  Mi aprendizaje
                </Link>
              </li>
            </ul>
          )}

          {!isLoggedIn && (
            <div className="d-flex">
              <Link className="btn btn-outline-dark mx-2" to="login">
                Iniciar sesión
              </Link>
              <Link className="btn btn-dark" to="register">
                Regístrate
              </Link>
            </div>
          )}
          {isLoggedIn && (
            <div className="d-flex">
              <button
                className="btn btn-outline-dark mx-2"
                onClick={handleOnLogout}
              >
                Salir
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default memo(Nav);
