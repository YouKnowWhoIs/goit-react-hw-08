import "./App.css";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

const Header = lazy(() => import("../header/header.jsx"));
const HomePage = lazy(() => import("../../pages/homePage/homePage.jsx"));
const LoginForm = lazy(() => import("../../pages/loginPage/loginPage.jsx"));
const RegistrationForm = lazy(() =>
  import("../../pages/registerPage/registerPage.jsx")
);
const ContactsPage = lazy(() =>
  import("../../pages/contactsPage/contactsPage.jsx")
);

import { RefreshUser } from "../../redux/auth/operations.js";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import { PrivateRoute } from "./privateRoute.jsx";
import { RestrictedRoute } from "./restrictedRoute.jsx";
import { Loading } from "../loading/loading.jsx";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(RefreshUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginForm />}
              />
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
      </Suspense>
    </>
  );
}

export default App;
