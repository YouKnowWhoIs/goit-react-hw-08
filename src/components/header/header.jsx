import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { AuthNav } from "../authNav/authNav.jsx";
import { UserMenu } from "../userMenu/userMenu.jsx";

import { selectIsLoggedIn } from "../../redux/auth/slice.js";

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);

  return (
    <div className="heaer-conteiner">
      <nav>
        <NavLink to="/" className="header-nav-text">
          Home
        </NavLink>

        {isLoggedIn && (
          <NavLink to="/contacts" className="header-nav-text-cantacts">
            Contacts
          </NavLink>
        )}

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </div>
  );
};
