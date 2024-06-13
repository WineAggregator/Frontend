import React, { useContext } from 'react';
import styles from './Header.module.scss';
import { Person } from '@gravity-ui/icons';
import { Icon } from '@gravity-ui/uikit';
import HeaderDropDownMenu from '../../layers/components/HeaderDropDownMenu/HeaderDropDownMenu';
import { AuthContext } from '../..';
import { Link } from 'react-router-dom';

const Header = () => {
  const store = useContext(AuthContext);
  return (
    <div className={styles.header}>
      <div className={`_container ${styles.container}`}>
        <div className={styles.logo}>
          <div className={styles.logoImg}>
            <img src={require('./logo.png')} />
          </div>
          <div className={styles.logoText}>
            Wine Events
          </div>
        </div>
        <div className={styles.profileMenu}>
        {
          store.isAuth && store.user != null ? (
            <HeaderDropDownMenu user={store.user}/>
          ) : (
            <div className={styles.auth}>
              <div className={styles.authItem}>
                <Link to={"/login"}>
                  Вход
                </Link>
              </div>
              <div className={styles.authItem}>
                <Link to={"/registration"}>
                  Регистрация
                </Link>
              </div>
            </div>
          )
        }
          
        </div>
      </div>
    </div>
  );
};

export default Header;