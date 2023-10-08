import {
  Input,
  PasswordInput,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./profile.module.css";

const Profile = () => {
  const [nameValue, setNameValue] = useState("");
  const onChangeName = (e) => {
    setNameValue(e.target.value)
  }

  const [emailValue, setEmailValue] = useState("");
  const onChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };

  const [passwordValue, setPasswordValue] = useState("");
  const onChangePassword = (e) => {
    setPasswordValue(e.target.value);
  };


  return (
    <div className={styles[`profile-container`]}>
      <div className={styles[`link-container`]}>
        <NavLink className="mb-7 text text_type_main-medium">Профиль</NavLink>
        <NavLink className="mb-7 text text_type_main-medium">
          История заказов
        </NavLink>
        <NavLink className="mb-5 text text_type_main-medium">Выход</NavLink>
        <p className="mt-20 text text_type_main-default">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <form className={styles.form}>
      <Input
          type={"text"}
          placeholder={"Имя"}
          name={"Имя"}
          value={nameValue}
          onChange={onChangeName}
          icon={undefined}
          onIconClick={undefined}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mb-6"
          required
        />
        <EmailInput
          value={emailValue}
          onChange={onChangeEmail}
          name={"email"}
          placeholder="E-mail"
          isIcon={false}
          extraClass="mb-6"
          required
        />
        <PasswordInput
          value={passwordValue}
          onChange={onChangePassword}
          name={"Пароль"}
          extraClass="mb-6"
          required
        />
      </form>
    </div>
  );
};

export default Profile;
