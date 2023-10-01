import {
    EmailInput,
    Button,
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import { Link } from "react-router-dom";
  import { useState } from "react";
  import styles from "./forgot-password.module.css";

const ForgotPassword = () => {
  const [value, setValue] = useState(null);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles[`forgot-password-container`]}>
      <h2 className="text text_type_main-medium mb-6">Восстановление пароля</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <EmailInput
          onChange={onChange}
          value={value}
          name={"email"}
          placeholder="Укажите e-mail"
          isIcon={false}
          extraClass="mb-6"
          required
        />
      </div>
      <Button htmlType="button" type="primary" size="medium">
        Восстановить
      </Button>
      <p className="text text_type_main-default mt-20">
        Вспомнили пароль? <Link>Войти</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
