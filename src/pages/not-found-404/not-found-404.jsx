import { Link } from "react-router-dom";
import { HOME } from "../../utils/consts";
import styles from "./not-found-404.module.css";

const NotFound404 = () => {
  return (
    <div className={`mt-20 ${styles.wrapper}`}>
      <h1 className="text text_type_main-large pb-10">Ой! Ошибка 404</h1>
      <p className="text text_type_main-medium pb-6">Такой страницы не существует</p>
      <p className={`text text_type_main-medium ${styles.text}`}>
        попробуйте другой адрес<br />или перейдите на{" "}
        <Link to={HOME} className={`text text_type_main-medium ${styles.link}`}>
           домашнюю страницу
        </Link>
      </p>
    </div>
  );
};

export default NotFound404;
