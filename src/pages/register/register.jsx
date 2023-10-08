import {
  Input,
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import styles from "./register.module.css";
import { LOGIN_PAGE } from "../../utils/consts";

const Register = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const [state, setState] = useState("");
  const inputRef = useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };

  return (
    <div className={styles[`register-container`]}>
      <h2 className="text text_type_main-medium mb-6">Регистрация</h2>
      <form className={styles.form}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={(e) => setState(e.target.value)}
          icon={undefined}
          value={state}
          name={"Имя"}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mb-6"
          required
        />
        <EmailInput
          onChange={onChange}
          value={null}
          name={"email"}
          placeholder="E-mail"
          isIcon={false}
          extraClass="mb-6"
          required
        />
        <PasswordInput
          onChange={onChange}
          value={value}
          name={"Пароль"}
          extraClass="mb-6"
          required
        />
      </form>
      <Button htmlType="button" type="primary" size="medium">
        Зарегистрироваться
      </Button>
      <p className="text text_type_main-default mb-4 mt-20">
        Уже зарегистрированы? <Link to={LOGIN_PAGE}>Войти</Link>
      </p>
    </div>
  );
};

export default Register;
