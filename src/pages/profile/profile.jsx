import {
  Input,
  PasswordInput,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./profile.module.css";
import { useSelector } from "react-redux";


const Profile = () => {
  const { userData } = useSelector((store) => store.user);

  const [form, setValue] = useState({
    name: userData.name,
    email: userData.email,
    password: "123456",
  });
  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  return userData ? (
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
          name={"name"}
          value={form.name}
          onChange={onChange}
          icon={"EditIcon"}
          onIconClick={undefined}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="pb-6"
          required
        />
        <EmailInput
          value={form.email}
          onChange={onChange}
          name={"email"}
          placeholder="E-mail"
          isIcon={true}
          extraClass="pb-6"
          required
        />
        <PasswordInput
          value={form.password}
          onChange={onChange}
          name={"password"}
          icon="EditIcon"
          extraClass="pb-6"
          required
        />
      </form>
    </div>
  ) : (
    <p>Ждите!</p>
  );
};

export default Profile;
