import {
  Input,
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import styles from "./register.module.css";
import { HOME, LOGIN_PAGE } from "../../utils/consts";
import { useDispatch } from "react-redux";
import { registerRequest } from "../../services/actions/user/register";
import { useSelector } from "../../services/hooks/hooks";

const Register = () => {
  const sendRegisterDataSuccess = useSelector(
    (store) => store.user.registerSuccess
  );

  const [form, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const dispath = useDispatch();
  const navigate = useNavigate();

  const sendRegisterData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispath(registerRequest(form));
  };

  useEffect(() => {
    if (sendRegisterDataSuccess) navigate(HOME);
  }, [navigate, sendRegisterDataSuccess]);

  return (
    <div className={styles[`register-container`]}>
      <h2 className="text text_type_main-medium mb-6">Регистрация</h2>
      <form className={styles.form} onSubmit={sendRegisterData}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          name={"name"}
          value={form.name}
          onChange={onChange}
          icon={undefined}
          onIconClick={undefined}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mb-6"
          required
        />
        <EmailInput
          value={form.email}
          onChange={onChange}
          name={"email"}
          placeholder="E-mail"
          isIcon={false}
          extraClass="mb-6"
          required
        />
        <PasswordInput
          value={form.password}
          onChange={onChange}
          name={"password"}
          extraClass="mb-6"
          required
        />
      <Button
        htmlType="submit"
        type="primary"
        size="medium"
      >
        Зарегистрироваться
      </Button>
      </form>
      <p className="text text_type_main-default mb-4 mt-20">
        Уже зарегистрированы? <Link to={LOGIN_PAGE}>Войти</Link>
      </p>
    </div>
  );
};

export default Register;
