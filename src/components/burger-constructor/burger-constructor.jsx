import {
  CurrencyIcon,
  Button,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import styles from "./burger-constructor.module.css";
import { useCallback, useMemo } from "react";
import { getOrderId } from "../../services/actions/order-details";
import { DELETE_ORDER_ID } from "../../services/actions/order-details";
import { useDispatch, useSelector } from "react-redux";
import {
  addUniqueId,
} from "../../services/actions/burger-constructor";
import { useDrop } from "react-dnd";
import BurgerConstructorItem from "../burger-constructor-item/burger-constructor-item";

const BurgerConstructor = () => {
  const { bun, ingredients } = useSelector(
    (store) => store.selectedItems.selectedItems
  );
  const orderId = useSelector((store) => store.orderID.number);
  const dispatch = useDispatch();

  const [{ isOver }, dropTarget] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: (ingredient) => {
      dispatch(addUniqueId(ingredient));
    },
  });

  const totalPrice = useMemo(() => {
    const ingredientsSum = ingredients.reduce(
      (totalAll, item) => totalAll + item.price,
      0
    );
    if (bun) {
      return bun.price * 2 + ingredientsSum;
    } else {
      return ingredientsSum;
    }
  }, [bun, ingredients]);

  const placeAnOrder = useCallback(() => {
    dispatch(getOrderId(bun, ingredients));
  }, [dispatch, bun, ingredients]);

  return (
    <section className={`mt-15 ${styles[`constructor-container`]}`}>
      <ul ref={dropTarget} className={`${styles.list}`}>
        <li className={`ml-8 pl-4 pr-4 ${styles.item}`}>
          {bun && (
            <ConstructorElement
              type="top"
              isLocked={true}
              key={bun._id}
              text={bun.name + " (верх)"}
              price={bun.price}
              thumbnail={bun.image}
            />
          )}
        </li>
        {ingredients.length > 0 && (
          <ul className={`${styles[`list-wrapper`]} custom-scroll`}>
            {ingredients.map((item) => {
              return (
                <BurgerConstructorItem item={item} key={item.uniqueId}/>
              );
            })}
          </ul>
        )}
        {bun && (
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
        )}
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
            dispatch({ type: DELETE_ORDER_ID });
          }}
        >
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
};

export default BurgerConstructor;
