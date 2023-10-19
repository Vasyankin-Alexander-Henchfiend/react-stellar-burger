import styles from "./profile-form.module.css";
import {
  Input,
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { patchProfileRequest } from "../../services/actions/profile";

const ProfileForm = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((store) => store.user);

  const [form, setValue] = useState({
    name: userData.name,
    email: userData.email,
    password: "123456",
  });

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const isInputChange =
    form.name !== userData.name ||
    form.email !== userData.email ||
    form.password !== "123456";

  const cancelAllChanges = () => {
    setValue({
      ...form,
      name: userData.name,
      email: userData.email,
      password: "123456",
    });
  };

  const patchProfile = e => {
    e.preventDefault();
    dispatch(patchProfileRequest(form.name, form.email));
  }

  return (
    <div className={styles[`form-container`]}>
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
          placeholder={"Пароль"}
          icon="EditIcon"
          extraClass="pb-6"
          required
        />
      </form>
      <div>
        <Button
          hidden={!isInputChange ? true : false}
          htmlType="button"
          type="secondary"
          size="medium"
          onClick={cancelAllChanges}
        >
          Отмена
        </Button>
        <Button
          hidden={!isInputChange ? true : false}
          htmlType="button"
          type="primary"
          size="medium"
          onClick={patchProfile}
        >
          Сохранить
        </Button>
      </div>
    </div>
  );
};

export default ProfileForm;
