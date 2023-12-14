import {
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import styles from "./reset-password.module.css";
import { HOME, LOGIN_PAGE } from "../../utils/consts";
import { resetPasswordRequest } from "../../services/actions/reset-password";
import { useSelector, useDispatch } from "../../services/hooks/hooks";
import { forgotPasswordRemove } from "../../services/actions/forgot-password";

const ResetPassword = () => {
  const { resetPasswordSuccess } = useSelector((store) => store.resetPassword);
  const { emailSuccess } = useSelector((store) => store.forgotPassword);

  const [form, setValue] = useState({ password: "", token: "" });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const dispath = useDispatch();
  const sendNewPasswordData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispath(resetPasswordRequest(form.password, form.token));
  };

  useEffect(() => {
    if (resetPasswordSuccess) {
      navigate(LOGIN_PAGE)
      dispath(forgotPasswordRemove())
    }
  }, [navigate, resetPasswordSuccess, dispath]);

  if (!emailSuccess) {
    return <Navigate to={HOME} />;
  } else
    return (
      <div className={styles[`reset-password-container`]}>
        <h2 className="text text_type_main-medium mb-6">
          Восстановление пароля
        </h2>
        <form className={styles.form} onSubmit={sendNewPasswordData}>
          <PasswordInput
            onChange={onChange}
            value={form.password}
            name={"password"}
            placeholder={"Введите новый пароль"}
            extraClass="mb-6"
            required
          />
          <Input
            type={"text"}
            value={form.token}
            onChange={onChange}
            name={"token"}
            placeholder={"Введите код из письма"}
            error={false}
            icon={undefined}
            onIconClick={undefined}
            errorText={"Ошибка"}
            size={"default"}
            extraClass="mb-6"
            required
          />
          <Button htmlType="submit" type="primary" size="medium">
            Сохранить
          </Button>
        </form>
        <p className="text text_type_main-default mt-20">
          Вспомнили пароль? <Link to={LOGIN_PAGE}>Войти</Link>
        </p>
      </div>
    );
};

export default ResetPassword;
