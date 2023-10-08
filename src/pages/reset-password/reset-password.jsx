import {
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./reset-password.module.css";
import { LOGIN_PAGE } from "../../utils/consts";
import { useDispatch } from "react-redux";
import { resetPasswordRequest } from "../../services/actions/reset-password";

const ResetPassword = () => {
  const [passwordValue, setPasswordValue] = useState("");
  const onChangePassword = (e) => {
    setPasswordValue(e.target.value);
  };

  const [codeValue, setCodeValue] = useState("");
  const onChangeCode = (e) => {
    setCodeValue(e.target.value);
  };

  const navigate = useNavigate();
  const dispath = useDispatch();
  const sendNewPasswordData = (e) => {
    e.preventDefault();
    navigate(LOGIN_PAGE);
    dispath(resetPasswordRequest(passwordValue, codeValue));
  };

  return (
    <div className={styles[`reset-password-container`]}>
      <h2 className="text text_type_main-medium mb-6">Восстановление пароля</h2>
      <form className={styles.form}>
        <PasswordInput
          onChange={onChangePassword}
          value={passwordValue}
          name={"пароль"}
          placeholder={"Введите новый пароль"}
          extraClass="mb-6"
          required
        />
        <Input
          type={"text"}
          value={codeValue}
          onChange={onChangeCode}
          name={"код из письма"}
          placeholder={"Введите код из письма"}
          error={false}
          icon={undefined}
          onIconClick={undefined}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mb-6"
          required
        />
      </form>
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        onClick={sendNewPasswordData}
      >
        Сохранить
      </Button>
      <p className="text text_type_main-default mt-20">
        Вспомнили пароль? <Link to={LOGIN_PAGE}>Войти</Link>
      </p>
    </div>
  );
};

export default ResetPassword;
