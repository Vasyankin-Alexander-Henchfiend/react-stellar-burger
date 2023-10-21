import {
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./login.module.css";
import { FORGOT_PASSWORD_PAGE, HOME, REGISTER_PAGE } from "../../utils/consts";
import { loginRequest } from "../../services/actions/user/login";

const Login = () => {
  const loginRequestSuccess = useSelector((store) => store.user.loginSuccess)
  const [form, setValue] = useState({ email: '', password: '' });

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendLoginData = e => {
    e.preventDefault();
    dispatch(loginRequest(form.email, form.password));
  }

  useEffect(() => {
    return (
      loginRequestSuccess ? navigate(HOME) : null
    )
  }, [navigate, loginRequestSuccess])

  return (
    <div className={styles[`login-container`]}>
      <h2 className="text text_type_main-medium mb-6">Вход</h2>
      <form className={styles.form}>
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
      </form>
      <Button htmlType="button" type="primary" size="medium" onClick={sendLoginData}>
        Войти
      </Button>
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
