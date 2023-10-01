import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import HomePage from "../../pages/home/home";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import Profile from "../../pages/profile/profile";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <pre className={styles.pre}>
          <AppHeader />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </pre>
      </BrowserRouter>
    </div>
  );
}

export default App;