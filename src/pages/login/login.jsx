import {
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./login.module.css";
import { FORGOT_PASSWORD_PAGE, REGISTER_PAGE } from "../../utils/consts";

const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const onChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };

  const [passwordValue, setPasswordValue] = useState("");
  const onChangePassword = (e) => {
    setPasswordValue(e.target.value);
  };

  const navigate = useNavigate();

  return (
    <div className={styles[`login-container`]}>
      <h2 className="text text_type_main-medium mb-6">Вход</h2>
      <form className={styles.form}>
        <EmailInput
          onChange={onChangeEmail}
          value={emailValue}
          name={"email"}
          placeholder="E-mail"
          isIcon={false}
          extraClass="mb-6"
          required
        />
        <PasswordInput
          onChange={onChangePassword}
          value={passwordValue}
          name={"password"}
          extraClass="mb-6"
          required
        />
      </form>
      <Button htmlType="button" type="primary" size="medium">
        Войти
      </Button>
      <p className="text text_type_main-default mb-4 mt-20">
        Вы — новый пользователь?{" "}
        <Link to={REGISTER_PAGE}>Зарегистрироваться</Link>
      </p>
      <p className="text text_type_main-default">
        Забыли пароль?{" "}
        <Link Link to={FORGOT_PASSWORD_PAGE}>
          Восстановить пароль
        </Link>
      </p>
    </div>
  );
};

export default Login;
