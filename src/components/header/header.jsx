import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="heaer-conteiner">
      <nav>
        <NavLink to="/" className="header-nav-text">
          Home
        </NavLink>
        <NavLink to="/contacts" className="header-nav-text-cantacts">
          Contacts
        </NavLink>
        <NavLink
          to="/register"
          className="header-nav-text header-nav-text-register"
        >
          Register
        </NavLink>
        <NavLink to="/login" className="header-nav-text header-nav-text-login">
          Log In
        </NavLink>
      </nav>
    </div>
  );
};
