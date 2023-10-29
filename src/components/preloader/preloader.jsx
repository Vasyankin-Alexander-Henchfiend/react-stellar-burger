import styles from "./preloader.module.css";

const Preloader = () => {
  return (
    <p className={`text_type_main-large ${styles.preloader}`}>
      Ждем загрузки...
    </p>
  );
};

export default Preloader;
