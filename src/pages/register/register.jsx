import {
  Input,
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./register.module.css";
import { LOGIN_PAGE } from "../../utils/consts";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from "../../services/actions/register";

const Register = () => {
  const sendRegisterDataSuccess = useSelector(
    (store) => store.register.registerSuccess
  );

  const [nameValue, setNameValue] = useState("");
  const onChangeName = (e) => {
    setNameValue(e.target.value);
  };

  const [emailValue, setEmailValue] = useState("");
  const onChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };

  const [passwordValue, setPasswordValue] = useState("");
  const onChangePassword = (e) => {
    setPasswordValue(e.target.value);
  };

  const dispath = useDispatch();
  const navigate = useNavigate();

  const sendRegisterData = (e) => {
    e.preventDefault();
    dispath(registerRequest(emailValue, passwordValue, nameValue));
  };

  useEffect(() => {
    return sendRegisterDataSuccess ? navigate(LOGIN_PAGE) : null;
  }, [navigate, sendRegisterDataSuccess]);

  return (
    <div className={styles[`register-container`]}>
      <h2 className="text text_type_main-medium mb-6">Регистрация</h2>
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
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        onClick={sendRegisterData}
      >
        Зарегистрироваться
      </Button>
      <p className="text text_type_main-default mb-4 mt-20">
        Уже зарегистрированы? <Link to={LOGIN_PAGE}>Войти</Link>
      </p>
    </div>
  );
};

export default Register;
