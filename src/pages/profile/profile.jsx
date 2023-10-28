import { NavLink, Outlet } from "react-router-dom";
import styles from "./profile.module.css";
import { LOGIN_PAGE, ORDERS_HISTORY_PAGE, PROFILE_PAGE } from "../../utils/consts";
import { useDispatch } from "react-redux";
import { logoutRequest } from "../../services/actions/user/login";

const Profile = () => {

  const dispatch = useDispatch();
  const logout = e => {
    e.preventDefault();
    dispatch(logoutRequest())
  }
  

  return (
    <section className={styles[`profile-container`]}>
      <div className={styles[`link-container`]}>
        <NavLink to={PROFILE_PAGE} className={(({ isActive }) => !isActive ? styles[`link-inactive`] : styles.link)}end>Профиль</NavLink>
        <NavLink to={ORDERS_HISTORY_PAGE} className={(({ isActive }) => !isActive ? styles[`link-inactive`] : styles.link)}>
          История заказов
        </NavLink>
        <NavLink to={LOGIN_PAGE} className={(({ isActive }) => !isActive ? styles[`link-inactive`] : styles.link)} onClick={logout}>Выход</NavLink>
        <p className={`mt-20 text text_type_main-default ${styles.discription}`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <Outlet />
    </section>
  );
};

export default Profile;
