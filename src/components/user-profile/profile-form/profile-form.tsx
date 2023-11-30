import styles from "./profile-form.module.css";
import {
  Input,
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { patchProfileRequest } from "../../../services/actions/user/profile";
import { useSelector } from "../../../services/hooks/hooks";

const ProfileForm = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((store) => store.user);

  const [form, setValue] = useState({
    name: userData.name,
    email: userData.email,
    password: "123456",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
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

  const patchProfile = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(patchProfileRequest(form));
    setValue({
      ...form,
      password: "123456",
    });
  };

  return (
    <section className={`pt-20 ${styles[`form-container`]}`}>
      <form
        className={styles.form}
        onSubmit={patchProfile}
        onReset={cancelAllChanges}
      >
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
        <div>
          <Button
            hidden={!isInputChange ? true : false}
            htmlType="reset"
            type="secondary"
            size="medium"
          >
            Отмена
          </Button>
          <Button
            hidden={!isInputChange ? true : false}
            htmlType="submit"
            type="primary"
            size="medium"
          >
            Сохранить
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ProfileForm;
