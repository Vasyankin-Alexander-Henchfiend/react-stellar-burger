import {
  CurrencyIcon,
  Button,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import styles from "./burger-constructor.module.css";
import { useMemo, useContext, useCallback } from "react";
import { ApiDataContext } from "../../services/appContext";
import { getOrderId } from '../../services/actions/order-details';
import { DELETE_ORDER_ID} from "../../services/actions/order-details";
import { useDispatch, useSelector } from "react-redux";


const BurgerConstructor = () => {
  const { data } = useContext(ApiDataContext);

  const orderId = useSelector(store => store.orderID.number);
  const dispatch = useDispatch();
  
  
  const bun = useMemo(() => {
    return data.length > 0 && data.find((item) => item.type === "bun");
  }, [data]);
  
  const ingredients = useMemo(() => {
    return data.filter((item) => item.type !== "bun");
  }, [data]);
  
  const totalPrice = useMemo(() => {
    return (
      bun.price * 2 +
      ingredients.reduce((totalAll, item) => totalAll + item.price, 0)
      );
    }, [data]);
  
  const placeAnOrder = useCallback(() => {
    dispatch(getOrderId(bun, ingredients))
  }, [dispatch, bun, ingredients])

  return (
    <section className={`mt-15 ${styles[`constructor-container`]}`}>
      <ul className={`${styles.list}`}>
        <li className={`ml-8 pl-4 pr-4 ${styles.item}`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            key={bun._id}
            text={bun.name + " (верх)"}
            price={bun.price}
            thumbnail={bun.image}
          />
        </li>
        <ul className={`${styles[`list-wrapper`]} custom-scroll`}>
          {data.map((item) => {
            if (item.type !== "bun") {
              return (
                <li className={`pl-4 pr-4 ${styles.item}`}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    key={item._id}
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                  />
                </li>
              );
            } else return null;
          })}
        </ul>
        <li className={`ml-8 pl-4 pr-4 ${styles.item}`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            key={bun._id}
            text={bun.name + " (низ)"}
            price={bun.price}
            thumbnail={bun.image}
          />
        </li>
      </ul>
      <div className={`pr-6 ${styles[`price-container`]}`}>
        <span className="text text_type_digits-medium">{totalPrice}</span>
        <div className={`ml-2 mr-10 ${styles[`price-icon`]}`}>
          <CurrencyIcon />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={placeAnOrder}
        >
          Оформить заказ
        </Button>
      </div>
      {orderId && (
        <Modal
          title=""
          onClose={() => {
            dispatch({type: DELETE_ORDER_ID});
          }}
        >
          <OrderDetails/>
        </Modal>
      )}
    </section>
  );
};

export default BurgerConstructor;