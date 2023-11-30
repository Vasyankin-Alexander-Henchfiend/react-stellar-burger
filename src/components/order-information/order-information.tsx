import styles from "./order-information.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getOrder } from "../../services/actions/order-information";
import Preloader from "../preloader/preloader";
import { useSelector } from "../../services/hooks/hooks";
import { TOrderNumber } from "./order-information.types";
import { TIngredient, TOrder } from "../ui/types";
import {
  getFiltredIngredients,
  getTotalPrice,
  getUniqFiltredIngredients,
} from "../../utils/consts";

const OrderImformation = ({ number }: TOrderNumber) => {
  const { orderNumber } = useParams();
  number = orderNumber;
  const order: TOrder = useSelector((store) => store.currentOrder.order);

  const ingredients = order?.ingredients;
  const items: TIngredient[] = useSelector((store) => store.items.items);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrder(number));
  }, [dispatch, number]);

  const filtredIngredients = useMemo(() => {
    return getFiltredIngredients(ingredients, items);
  }, [items, ingredients]);

  const totalPrice = useMemo(() => {
    return getTotalPrice(filtredIngredients);
  }, [filtredIngredients]);

  const uniqFiltredIngredients = getUniqFiltredIngredients(filtredIngredients);

  const countIngredients = ingredients?.reduce(
    (count: { [key: string]: number }, item: string) => {
      count[item] = (count[item] || 0) + 1;
      return count;
    },
    {}
  );

  const ingredientsList = useMemo(() => {
    return uniqFiltredIngredients?.map((item: TIngredient, index: number) => {
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

  if (!order) {
    return <Preloader />;
  }
  return (
    <div className={`${styles[`container-wrapper`]} `}>
      <p className={`text text_type_main-default mb-10 ${styles.number}`}>
        #{number}
      </p>
      <h2 className={`text text_type_main-medium mb-3 ${styles.name}`}>
        {order.name}
      </h2>
      <p className={`text text_type_main-default mb-15 ${styles.status}`}>
        {order.status === "done" ? "Выполнено" : "Готовится"}
      </p>
      <p className={`text text_type_main-medium mb-6 ${styles.b}`}>Состав:</p>
      <ul className={`custom-scroll ${styles[`image-list`]}`}>
        {ingredientsList}
      </ul>
      <div className={styles[`date-price-wrapper`]}>
        <p
          className={`text text_type_main-default text_color_inactive ${styles.date}`}
        >
          <FormattedDate date={new Date(order.createdAt)} />
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
