import {
  CurrencyIcon,
  Button,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import styles from "./burger-constructor.module.css";
import { useCallback } from "react";
import { getOrderId } from '../../services/actions/order-details';
import { DELETE_ORDER_ID} from "../../services/actions/order-details";
import { useDispatch, useSelector } from "react-redux";
import { GET_ITEM } from "../../services/actions/burger-constructor";
import { useDrop } from "react-dnd";


const BurgerConstructor = () => {
  const bun = useSelector((store) => store.selectedItems.selectedItems.bun);
  const ingredients = useSelector((store) => store.selectedItems.selectedItems.ingredients);
  const orderId = useSelector(store => store.orderID.number);
  const dispatch = useDispatch();

  const [{ isOver }, dropTarget] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: (ingredient) => {
      dispatch({type: GET_ITEM, newIngredient: ingredient});
    },
  });
  
  const totalPrice = 0
  
  const placeAnOrder = useCallback(() => {
    dispatch(getOrderId(bun, ingredients))
  }, [dispatch, bun, ingredients])

  return (
    <section className={`mt-15 ${styles[`constructor-container`]}`}>
      <ul ref={dropTarget} className={`${styles.list}`}>
        <li className={`ml-8 pl-4 pr-4 ${styles.item}`}>
        {bun && (<ConstructorElement
            type="top"
            isLocked={true}
            key={bun._id}
            text={bun.name + " (верх)"}
            price={bun.price}
            thumbnail={bun.image}
          />)}
        </li>
        {ingredients.length > 0 && (<ul className={`${styles[`list-wrapper`]} custom-scroll`}>
          {ingredients.map((item) => {
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
        </ul>)}
        {bun && (<li className={`ml-8 pl-4 pr-4 ${styles.item}`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            key={bun._id}
            text={bun.name + " (низ)"}
            price={bun.price}
            thumbnail={bun.image}
          />
        </li>)}
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