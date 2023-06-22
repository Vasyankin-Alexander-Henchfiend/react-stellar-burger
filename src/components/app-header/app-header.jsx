import React from 'react';
import {
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

const AppHeader = () => {
    return (
      <header className={`pt-6 pb-6 m-10 ${styles.header}`}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.items}>
          <div className={styles.container}>
            <a href="#" className={styles.link}>
              <BurgerIcon type="primary" />
              <span className="text text_type_main-default">Конструктор</span>
            </a>
            <a href="#" className={styles[`link-inactive`]}>
              <ListIcon type="secondary" />
              <span className="text text_type_main-default">Лента заказов</span>
            </a>
          </div>
          <a href="#" className={styles[`link-inactive`]}>
            <ProfileIcon type="secondary" />
            <span className="text text_type_main-default">Личный кабинет</span>
          </a>
        </nav>
      </header>
    );
  }

export default AppHeader;