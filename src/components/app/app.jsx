import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import HomePage from "../../pages/home/home";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import Profile from "../../pages/profile/profile";
import {
  FORGOT_PASSWORD_PAGE,
  HOME,
  LOGIN_PAGE,
  PROFILE_PAGE,
  REGISTER_PAGE,
  RESET_PASSWORD_PAGE,
} from "../../utils/consts";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <pre className={styles.pre}>
          <AppHeader />
          <main>
            <Routes>
              <Route path={HOME} element={<HomePage />} />
              <Route path={LOGIN_PAGE} element={<Login />} />
              <Route path={REGISTER_PAGE} element={<Register />} />
              <Route path={FORGOT_PASSWORD_PAGE} element={<ForgotPassword />} />
              <Route path={RESET_PASSWORD_PAGE} element={<ResetPassword />} />
              <Route path={PROFILE_PAGE} element={<Profile />} />
            </Routes>
          </main>
        </pre>
      </BrowserRouter>
    </div>
  );
}

export default App;
