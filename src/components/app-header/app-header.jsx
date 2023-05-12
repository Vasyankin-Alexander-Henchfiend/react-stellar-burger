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
            <div className="p-15">
                <Logo />
                <BurgerIcon />
                <ListIcon />
                <ProfileIcon />
            </div>     
        );
    }
}

export default AppHeader