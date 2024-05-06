import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { Header } from "../header/header.jsx";
import { HomePage } from "../../pages/homePage/homePage.jsx";
import { LoginForm } from "../../pages/loginPage/loginPage.jsx";
import { RegistrationForm } from "../../pages/registerPage/registerPage.jsx";
import { ContactsPage } from "../../pages/contactsPage/contactsPage.jsx";

import { RefreshUser } from "../../redux/auth/operations.js";
import { selectIsLoggedIn } from "../../redux/auth/slice.js";
import { PrivateRoute } from "./privateRoute.jsx";
import { RestrictedRoute } from "./restrictedRoute.jsx";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(RefreshUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginForm />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationForm />}
            />
          }
        />
        {isLoggedIn && (
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                redirectTo="/register"
                component={<ContactsPage />}
              />
            }
          />
        )}
      </Routes>
    </>
  );
}

export default App;
