import styles from "./order-card.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const OrderCard = ({ order }) => {
  const { number, createdAt, name, ingredients, status } = order;
  const { items } = useSelector((store) => store.items);
  const filtredIngredients = useMemo(() => {
    return ingredients
      .map((id) => {
        return items.filter(({ _id }) => _id === id);
      })
      .flat(2);
  }, [items, ingredients]);

  const totalPrice = useMemo(() => {
    return filtredIngredients.reduce(
      (totalAll, item) => totalAll + item.price,
      0
    );
  }, [filtredIngredients]);

  const ingredientsImages = useMemo(() => {
    return filtredIngredients.map((item, index) => {
      return (
        <li key={`${item._id} + ${index}`} className={styles[`image-wrapper`]} style={{ zIndex: 1000 - index }}>
          <img
            className={styles.image}
            src={item.image}
            alt={item.name}
          />
        </li>
      );
    });
  }, [filtredIngredients]);

  return (
    <li className={styles.card}>
      <div className={styles[`number-date-wrapper`]}>
        <p className={`text text_type_main-default ${styles.number}`}>
          #{number}
        </p>
        <p
          className={`text text_type_main-default text_color_inactive ${styles.date}`}
        >
          <FormattedDate date={new Date(createdAt)} />
        </p>
      </div>
      <h2 className={`text text_type_main-medium ${styles.name}`}>{name}</h2>
      <div className={styles[`image-price-container`]}>
        <ul className={styles[`image-list`]}>{ingredientsImages}</ul>
        <div className={styles[`price-wrapper`]}>
          <p className={`text text_type_digits-default ${styles.price}`}>
            {totalPrice}
          </p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  );
};

export default OrderCard;
