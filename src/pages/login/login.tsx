import {
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "../../services/hooks/hooks";
import styles from "./login.module.css";
import { FORGOT_PASSWORD_PAGE, REGISTER_PAGE } from "../../utils/consts";
import { loginRequest } from "../../services/actions/user/login";

const Login = () => {
  const [form, setValue] = useState({ email: '', password: '' });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const sendLoginData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginRequest(form));
  }

  return (
    <div className={styles[`login-container`]}>
      <h2 className="text text_type_main-medium mb-6">Вход</h2>
      <form className={styles.form} onSubmit={sendLoginData}>
        <EmailInput
          onChange={onChange}
          value={form.email}
          name={"email"}
          placeholder="E-mail"
          isIcon={false}
          extraClass="mb-6"
          required
        />
        <PasswordInput
          onChange={onChange}
          value={form.password}
          name={"password"}
          extraClass="mb-6"
          required
        />
      <Button htmlType="submit" type="primary" size="medium">
        Войти
      </Button>
      </form>
      <p className="text text_type_main-default mb-4 mt-20">
        Вы — новый пользователь?{" "}
        <Link to={REGISTER_PAGE}>Зарегистрироваться</Link>
      </p>
      <p className="text text_type_main-default">
        Забыли пароль?{" "}
        <Link to={FORGOT_PASSWORD_PAGE}>Восстановить пароль</Link>
      </p>
    </div>
  );
};

export default Login;
