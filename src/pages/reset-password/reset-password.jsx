import {
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import styles from "./reset-password.module.css";

const ResetPassword = () => {
  const [value, setValue] = useState(null);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const [state, setState] = useState(null)
  const inputRef = useRef(null)
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }

  return (
    <div className={styles[`reset-password-container`]}>
      <h2 className="text text_type_main-medium mb-6">Восстановление пароля</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <PasswordInput
          onChange={onChange}
          value={value}
          name={"password"}
          placeholder = {'Введите новый пароль'}
          extraClass="mb-6"
          required
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
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
      </div>
      <Button htmlType="button" type="primary" size="medium">
        Сохранить
      </Button>
      <p className="text text_type_main-default mt-20">
        Вспомнили пароль? <Link>Войти</Link>
      </p>
    </div>
  );
};

export default ResetPassword;
