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
import OdersHistory from "../user-profile/oders-history/orders-history";
import ProfileForm from "../user-profile/profile-form/profile-form";
import Feed from "../../pages/feed/feed";
import {
  FORGOT_PASSWORD_PAGE,
  HOME,
  INGREDIENT_DETAILS_PAGE,
  LOGIN_PAGE,
  ORDERS_HISTORY_PAGE,
  PROFILE_PAGE,
  REGISTER_PAGE,
  RESET_PASSWORD_PAGE,
  FEED_PAGE,
} from "../../utils/consts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { checkUserAuth } from "../../services/actions/user/auth";
import { getItems } from "../../services/actions/burger-ingredients";
import Preloader from "../preloader/preloader";
import OrderImformation from "../order-information/order-information";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;
  const { itemsRequest, items } = useSelector((store) => store.items);

  const handleModalClose = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(checkUserAuth());
    //после монтирования приложения ставим таймер на проверку авторизации, чтобы обновить подключение через 19,5 минут
    setInterval(() => {
      dispatch(checkUserAuth());
    }, 1170000);
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className={styles.app}>
        <AppHeader />
        {!itemsRequest && items.length > 0 ? (
          <main className={styles.main}>
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
              <Route path={FEED_PAGE} element={<Feed />} />
              <Route
                path={PROFILE_PAGE}
                element={<OnlyAuth component={<Profile />} />}
              >
                <Route index element={<ProfileForm />} />
                <Route path={ORDERS_HISTORY_PAGE} element={<OdersHistory />} />
              </Route>
              <Route path="*" element={<NotFound404 />} />
              <Route
                path={INGREDIENT_DETAILS_PAGE}
                element={<IngredientDetails />}
              />
            </Routes>
            {background && (
              <Routes>
                <Route
                  path={INGREDIENT_DETAILS_PAGE}
                  element={
                    <Modal
                      title="Детали ингредиента"
                      onClose={handleModalClose}
                    >
                      <IngredientDetails />
                    </Modal>
                  }
                />
                <Route
                  path='feed/:id'
                  element={
                    <Modal
                      title=""
                      onClose={handleModalClose}
                    >
                      <OrderImformation />
                    </Modal>
                  }
                />
                <Route
                  path='profile/orders/:id'
                  element={
                    <Modal
                      title=""
                      onClose={handleModalClose}
                    >
                      <OrderImformation />
                    </Modal>
                  }
                />
              </Routes>
              
            )}
          </main>
        ) : (
          <Preloader />
        )}
    </div>
  );
};

export default App;
