import { NavLink, Outlet } from "react-router-dom";
import styles from "./profile.module.css";
import { ORDERS_HISTORY_PAGE, PROFILE_PAGE } from "../../utils/consts";
import { useDispatch } from "react-redux";
import { logoutRequest } from "../../services/actions/login";

const Profile = () => {

  const dispatch = useDispatch();
  const logout = e => {
    e.preventDefault();
    dispatch(logoutRequest())
  }

  return (
    <div className={styles[`profile-container`]}>
      <div className={styles[`link-container`]}>
        <NavLink to={PROFILE_PAGE} className="mb-7 text text_type_main-medium">Профиль</NavLink>
        <NavLink to={ORDERS_HISTORY_PAGE} className="mb-7 text text_type_main-medium">
          История заказов
        </NavLink>
        <button className={`mb-5 text text_type_main-medium ${styles[`logout-button`]}`} onClick={logout}>Выход</button>
        <p className="mt-20 text text_type_main-default">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <Outlet />
    </div>
  );
};

export default Profile;
