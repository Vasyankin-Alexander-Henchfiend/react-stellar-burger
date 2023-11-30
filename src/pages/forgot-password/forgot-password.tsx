import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import styles from "./forgot-password.module.css";
import { LOGIN_PAGE, RESET_PASSWORD_PAGE } from "../../utils/consts";
import { forgotPasswordRequest } from "../../services/actions/forgot-password";
import { useDispatch } from "react-redux";
import { useSelector } from "../../services/hooks/hooks";

const ForgotPassword = () => {
  const sendEmailDataSuccess = useSelector(
    (store) => store.forgotPassword.emailSuccess
  );

  const [emailValue, setEmailValue] = useState("");
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const dispath = useDispatch();
  const navigate = useNavigate();

  const sendEmailData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispath(forgotPasswordRequest(emailValue));
  };

  useEffect(() => {
    if (sendEmailDataSuccess) navigate(RESET_PASSWORD_PAGE);
  }, [navigate, sendEmailDataSuccess]);

  return (
    <div className={styles[`forgot-password-container`]}>
      <h2 className="text text_type_main-medium mb-6">Восстановление пароля</h2>
      <form className={styles.form} onSubmit={sendEmailData}>
        <EmailInput
          onChange={onChangeEmail}
          value={emailValue}
          name={"email"}
          placeholder="Укажите e-mail"
          isIcon={false}
          extraClass="mb-6"
          required
        />
        <Button htmlType="submit" type="primary" size="medium">
          Восстановить
        </Button>
      </form>
      <p className="text text_type_main-default mt-20">
        Вспомнили пароль? <Link to={LOGIN_PAGE}>Войти</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
