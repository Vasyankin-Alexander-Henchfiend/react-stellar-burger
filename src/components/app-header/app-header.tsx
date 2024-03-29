import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import { NavLink } from "react-router-dom";
import { FEED_PAGE, HOME, PROFILE_PAGE } from "../../utils/consts";

const AppHeader = () => {
  return (
    <header className={`pt-6 pb-6 m-10 ${styles.header}`}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav className={styles.items}>
        <div className={styles.container}>
          <NavLink to={HOME} className={(({ isActive }) => !isActive ? styles[`link-inactive`] : styles.link)}>
            <BurgerIcon type="primary" />
            <span className="text text_type_main-default">Конструктор</span>
          </NavLink>
          <NavLink to={FEED_PAGE} className={(({ isActive }) => !isActive ? styles[`link-inactive`] : styles.link)}>
            <ListIcon type="primary" />
            <span className="text text_type_main-default">Лента заказов</span>
          </NavLink>
        </div>
        <NavLink to={PROFILE_PAGE} className={(({ isActive }) => !isActive ? styles[`link-inactive`] : styles.link)}>
          <ProfileIcon type="primary" />
          <span className="text text_type_main-default">Личный кабинет</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default AppHeader;
