import {
  Input,
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./register.module.css";
import { HOME, LOGIN_PAGE } from "../../utils/consts";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from "../../services/actions/user/register";

const Register = () => {
  const sendRegisterDataSuccess = useSelector(
    (store) => store.user.registerSuccess
  );

  const [form, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const dispath = useDispatch();
  const navigate = useNavigate();

  const sendRegisterData = (e) => {
    e.preventDefault();
    dispath(registerRequest(form));
  };

  useEffect(() => {
    return sendRegisterDataSuccess ? navigate(HOME) : null;
  }, [navigate, sendRegisterDataSuccess]);

  return (
    <div className={styles[`register-container`]}>
      <h2 className="text text_type_main-medium mb-6">Регистрация</h2>
      <form className={styles.form}>
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
