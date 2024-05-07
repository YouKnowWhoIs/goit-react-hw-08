import "./App.css";
import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./layout.jsx";

const HomePage = lazy(() => import("../../pages/homePage/homePage.jsx"));
const LoginPage = lazy(() => import("../../pages/loginPage/loginPage.jsx"));
const RegistrationPage = lazy(() =>
  import("../../pages/registerPage/registerPage.jsx")
);
const ContactsPage = lazy(() =>
  import("../../pages/contactsPage/contactsPage.jsx")
);

import { RefreshUser } from "../../redux/auth/operations.js";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors.js";
import { PrivateRoute } from "./privateRoute.jsx";
import { RestrictedRoute } from "./restrictedRoute.jsx";
import { Loading } from "../loading/loading.jsx";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(RefreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loading />
  ) : (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
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
      </Layout>
    </>
  );
}

export default App;
