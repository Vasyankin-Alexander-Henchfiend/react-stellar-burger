import styles from "./order-card.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const OrderCard = ({ order }) => {
  const { number, createdAt, name, ingredients } = order;
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
    return filtredIngredients.map((item) => {
      return (<img className={styles.image} src={item.image} alt={item.name}/>)
    })
  })
  

  return (
    <li className={styles.card}>
      <div>
        <div className={styles[`number-date-wrapper`]}>
          <span className={styles.number}>#{number}</span>
          <span className={styles.date}>{createdAt}</span>
        </div>
        <h2 className={styles.name}>{name}</h2>
        <div>
          <div>
            {ingredientsImages}
          </div>
          <span className={styles.price}>{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  );
};

export default OrderCard;
