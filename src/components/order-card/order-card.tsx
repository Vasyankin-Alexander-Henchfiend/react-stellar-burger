import styles from "./order-card.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo } from "react";
import { useSelector } from "../../services/hooks/hooks";
import { TOrderCard } from "./order-card.types";
import { TIngredient } from "../ui/types";
import {
  getTotalPrice,
  getUniqFiltredIngredients,
  getFiltredIngredients,
} from "../../utils/consts";

const OrderCard = ({ displayStatus, order }: TOrderCard) => {
  const { number, createdAt, name, ingredients } = order;
  const items: TIngredient[] = useSelector((store) => store.items.items);

  const filtredIngredients = useMemo(() => {
    return getFiltredIngredients(ingredients, items);
  }, [items, ingredients]);

  const uniqFiltredIngredients = getUniqFiltredIngredients(filtredIngredients);

  const totalPrice = useMemo(() => {
    return getTotalPrice(filtredIngredients);
  }, [filtredIngredients]);

  const ingredientsImages = useMemo(() => {
    return uniqFiltredIngredients?.map((item: TIngredient, index: number) => {
      if (index > 5) {
        return null;
      }
      return (
        <li
          key={`${item._id} + ${index}`}
          className={styles[`image-wrapper`]}
          style={{ zIndex: 100 - index }}
        >
          <img className={styles.image} src={item.image} alt={item.name} />
          {index >= 5 && uniqFiltredIngredients.length - 6 !== 0 && (
            <p className={`text text_type_digits-default ${styles.counter}`}>
              +{uniqFiltredIngredients.length - 6}
            </p>
          )}
        </li>
      );
    });
  }, [uniqFiltredIngredients]);

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
      <div>
        <h2 className={`text text_type_main-medium ${styles.name}`}>{name}</h2>
        {displayStatus ? (
          <p className={`text text_type_main-default mt-2 ${styles.status}`}>
            {order.status === "done" ? "Выполнено" : "Готовится"}
          </p>
        ) : null}
      </div>
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
