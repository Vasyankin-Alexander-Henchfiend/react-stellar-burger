import styles from "./order-card.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../services/actions/order-information";

const OrderCard = ({ displayStatus, order }) => {
  const { number, createdAt, name, ingredients } = order;
  const { items } = useSelector((store) => store.items);
  const dispatch = useDispatch();

  const filtredIngredients = useMemo(() => {
    return ingredients
      .map((id) => {
        return items.filter(({ _id }) => _id === id);
      })
      .flat(2);
  }, [items, ingredients]);

  const uniqFiltredIngredients = filtredIngredients.reduce((acc, item) => {
    if (acc.includes(item)) {
      return acc;
    }
    return [...acc, item];
  }, []);

  const totalPrice = useMemo(() => {
    return filtredIngredients.reduce(
      (totalAll, item) => totalAll + item.price,
      0
    );
  }, [filtredIngredients]);

  const ingredientsImages = useMemo(() => {
    return uniqFiltredIngredients.map((item, index) => {
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

  const getOrderDetails = () => {
    return dispatch(getOrder(number))
  }

  return (
    <li className={styles.card} onClick={getOrderDetails}>
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
          <p className={`text text_type_main-default mt-2 ${styles.status}`}>{order.status === 'done' ? 'Выполнено' : 'Готовится'}</p>
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
