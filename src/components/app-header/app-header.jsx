import React from 'react';
import {
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

class AppHeader extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
        <Logo />
        </div>
        <div className={styles.container_type_small}>
          <div className={styles.container}>
            <BurgerIcon className="" type="primary" />
            <p className="text text_type_main-default">Конструктор</p>
          </div>
          <div className={styles.container}>
            <ListIcon className="" type="secondary" />
            <p className="text text_type_main-default">Лента заказов</p>
          </div>
        </div>
        <div className={styles.container}>
          <ProfileIcon className="" type="secondary" />
          <p className="text text_type_main-default">Личный кабинет</p>
        </div>
      </header>
    );
  }
}

export default AppHeader