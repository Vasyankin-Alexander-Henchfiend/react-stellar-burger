import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import HomePage from "../../pages/home/home";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import Profile from "../../pages/profile/profile";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import NotFound404 from "../../pages/not-found-404/not-found-404";
import {
  FORGOT_PASSWORD_PAGE,
  HOME,
  LOGIN_PAGE,
  PROFILE_PAGE,
  REGISTER_PAGE,
  RESET_PASSWORD_PAGE,
} from "../../utils/consts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { checkUserAuth } from "../../services/actions/auth";
import { getItems } from "../../services/actions/burger-ingredients";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const handleModalClose = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(checkUserAuth());
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <pre className={styles.pre}>
        <AppHeader />
        <main>
          <Routes location={background || location}>
            <Route path={HOME} element={<HomePage />} />
            <Route
              path={LOGIN_PAGE}
              element={<OnlyUnAuth component={<Login />} />}
            />
            <Route
              path={REGISTER_PAGE}
              element={<OnlyUnAuth component={<Register />} />}
            />
            <Route
              path={FORGOT_PASSWORD_PAGE}
              element={<OnlyUnAuth component={<ForgotPassword />} />}
            />
            <Route
              path={RESET_PASSWORD_PAGE}
              element={<OnlyUnAuth component={<ResetPassword />} />}
            />
            <Route
              path={PROFILE_PAGE}
              element={<OnlyAuth component={<Profile />} />}
            />
            <Route path="*" element={<NotFound404 />} />
            <Route path="/ingredients/:id" element={<IngredientDetails />} />
          </Routes>
          {background && (
            <Routes>
              <Route
                path="/ingredients/:id"
                element={
                  <Modal title="Детали ингредиента" onClose={handleModalClose}>
                    <IngredientDetails />
                  </Modal>
                }
              />
            </Routes>
          )}
        </main>
      </pre>
    </div>
  );
};

export default App;
