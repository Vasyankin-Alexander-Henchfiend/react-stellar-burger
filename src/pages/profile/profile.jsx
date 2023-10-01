import {
  Input,
  PasswordInput,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import styles from "./profile.module.css";

const Profile = () => {
  const [value, setValue] = useState(null);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const [state, setState] = useState(null);
  const inputRef = useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };

  return (
    <div className={styles[`profile-container`]}>
      <div className={styles[`link-container`]}>
        <NavLink className="mb-7 text text_type_main-medium">Профиль</NavLink>
        <NavLink className="mb-7 text text_type_main-medium">История заказов</NavLink>
        <NavLink className="mb-5 text text_type_main-medium">Выход</NavLink>
        <p className="mt-20 text text_type_main-default">В этом разделе вы можете изменить свои персональные данные</p>
      </div>
      <div className={styles[`input-container`]}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={(e) => setState(e.target.value)}
          icon={"EditIcon"}
          value={state}
          name={"Имя"}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mb-6"
          required
        />
        <EmailInput
          onChange={onChange}
          icon={"EditIcon"}
          value={null}
          name={"email"}
          placeholder="E-mail"
          isIcon={false}
          extraClass="mb-6"
          required
        />
        <PasswordInput
          onChange={onChange}
          icon={"EditIcon"}
          value={value}
          name={"Пароль"}
          extraClass="mb-6"
          required
        />
      </div>
    </div>
  );
};

export default Profile;
