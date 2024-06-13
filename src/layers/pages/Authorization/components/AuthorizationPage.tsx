import React from 'react';
import styles from './AuthorizationPage.module.scss';
import { useFetcher, useLocation } from 'react-router-dom';
import { Button, RadioButton, RadioButtonOption, RadioGroup } from '@gravity-ui/uikit';
import { UserType } from '../../../../types/UserType';

let Authorization: any = {
  login: {
    header: "Вход",
    submitBtnText: "Войти"
  },
  registration: {
    header: "Регистрация",
    submitBtnText: "Зарегистрироваться"
  }
}

const AuthorizationPage = () => {
  const location = useLocation();
  const authoration = Authorization[location.pathname.replace("/", "")];
  const fetcher = useFetcher();
  const isRegistration = authoration.header == "Регистрация";
  const options: RadioButtonOption[] = [
    { value: '0', content: 'Клиент' },
    { value: '1', content: 'Организатор' },
  ];

  return (
    <div className={styles.page}>
      <div className={`${styles.containerPage} _container`}>
        <div className={styles.auth}>
          <h2 className={styles.headerPage}>
            {authoration.header}
          </h2>
          <div className={styles.content}>
            <fetcher.Form className={styles.form} method='POST' action={location.pathname}>
              <label className={styles.fieldLabel}>
                <div className={styles.fieldText}>
                  Почта
                </div>
                <input type='email' name='email' className={`${styles.textInput} ${styles.email}`} />
              </label>
              <label className={styles.fieldLabel}>
                <div className={styles.fieldText}>
                  Пароль
                </div>
                <input type='password' name='password' className={`${styles.textInput} ${styles.password}`} />
              </label>
              {
                isRegistration ? (
                  <div className={styles.userType}>
                    <div className={styles.userTypeHeader}>
                      Тип пользователя:
                    </div>
                    <RadioButton name='userType' defaultValue={options[0].value} options={options} className={styles.radio}/>
                  </div>
                ) : <></>
              }
              <div className={styles.submitBtnContainer}>
                <Button type='submit' className={styles.submitBtn} view='action'>
                  {authoration.submitBtnText}
                </Button>
              </div>
            </fetcher.Form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthorizationPage;