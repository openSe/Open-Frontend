import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./index.css";

const UserName = () => {
  const navigate = useNavigate();
  const [menuUser, setMenuUser] = useState(true);
  const toggleMenuUser = () => {
    setMenuUser(!menuUser);
  };
  return (
    <div>

      <div className="user-container">
        <div className="shopping-div" onClick={() => navigate("/shoppingCart")}>
          <p>Carrito</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
        </div>
        <div className="user-div" onClick={toggleMenuUser}>
          <p>Hola, Juan</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="svg-user" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
          </svg>
          <nav className={`nav-user ${menuUser ? "isNone" : ""}`}>
            <ul>
              <li>
                <Link
                  className="link-user"
                  onClick={toggleMenuUser}
                >
                  Cerrar sesion
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default UserName;
