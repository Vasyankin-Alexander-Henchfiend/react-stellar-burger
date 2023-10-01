import {
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./login.module.css";

const Login = () => {
  const [value, setValue] = useState(null);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles[`login-container`]}>
      <h2 className="text text_type_main-medium mb-6">Вход</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
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
          name={"password"}
          extraClass="mb-6"
          required
        />
      </div>
      <Button htmlType="button" type="primary" size="medium">
        Войти
      </Button>
      <p className="text text_type_main-default mb-4 mt-20">
        Вы — новый пользователь? <Link>Зарегистрироваться</Link>
      </p>
      <p className="text text_type_main-default">
        Забыли пароль? <Link>Восстановить пароль</Link>
      </p>
    </div>
  );
};

export default Login;