import styles from "./order-information.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const OrderImformation = () => {
  const { id } = useParams();
  const { order } = useSelector((store) => store.currentOrder);
  order._id = id;
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

  const uniqFiltredIngredients = filtredIngredients.reduce((acc, item) => {
    if (acc.includes(item)) {
      return acc;
    }
    return [...acc, item];
  }, []);

  const countIngredients = ingredients.reduce((count, item) => {
    count[item] = (count[item] || 0) + 1;
    return count;
  }, {});

  const ingredientsList = useMemo(() => {
    return uniqFiltredIngredients.map((item, index) => {
      return (
        <li key={index} className={`mb-4 ${styles[`image-list-item`]}`}>
          <div className={styles[`name-image-wrapper`]}>
            <div className={styles[`image-border`]}>
              <img src={item.image} alt={item.name} className={styles.image} />
            </div>
            <h3
              className={`text text_type_main-default ml-4 mr-4 ${styles.name}`}
            >
              {item.name}
            </h3>
          </div>
          <div className={styles[`price-wrapper`]}>
            <p className={`text text_type_digits-default mr-2 ${styles.price}`}>
              <span>{countIngredients[item._id]} x </span>
              {item.price}
            </p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
      );
    });
  }, [uniqFiltredIngredients, countIngredients]);

  return (
    <div className={`${styles[`container-wrapper`]} `}>
      <p className={`text text_type_main-default mb-10 ${styles.number}`}>
        #{number}
      </p>
      <h2 className={`text text_type_main-medium mb-3 ${styles.name}`}>
        {name}
      </h2>
      <p style={{ color: '#00CCCC' }} className="text text_type_main-default mb-15">{status === 'done' ? 'Выполнено' : 'Готовится'}</p>
      <p className={`text text_type_main-medium mb-6 ${styles.b}`}>Состав:</p>
      <ul className={`custom-scroll ${styles[`image-list`]}`}>
        {ingredientsList}
      </ul>
      <div className={styles[`date-price-wrapper`]}>
        <p
          className={`text text_type_main-default text_color_inactive ${styles.date}`}
        >
          <FormattedDate date={new Date(createdAt)} />
        </p>
        <div className={styles[`price-wrapper`]}>
          <p className={`text text_type_digits-default mr-2 ${styles.price}`}>
            {totalPrice}
          </p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default OrderImformation;
