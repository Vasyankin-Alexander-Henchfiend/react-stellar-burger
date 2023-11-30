import styles from "./burger-constructor.module.css";
import { useCallback, useMemo } from "react";
import { useDrop } from "react-dnd";
import { useNavigate } from "react-router-dom";
import {
  CurrencyIcon,
  Button,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { getOrderId } from "../../services/actions/order-details";
import { DELETE_ORDER_ID } from "../../services/actions/order-details";
import { useDispatch } from "react-redux";
import {
  REMOVE_ALL,
  addIngredient,
} from "../../services/actions/burger-constructor";
import BurgerConstructorItem from "./burger-constructor-item/burger-constructor-item";
import { LOGIN_PAGE, getTotalPrice } from "../../utils/consts";
import { useSelector } from "../../services/hooks/hooks";
import { TIngredient } from "../ui/types";

const BurgerConstructor = () => {
  const bun: TIngredient = useSelector(
    (store) => store.selectedItems.selectedItems.bun
  );
  const ingredients: TIngredient[] = useSelector(
    (store) => store.selectedItems.selectedItems.ingredients
  );
  const { orderNumberRequest, orderNumberRequestSuccess } = useSelector(
    (store) => store.orderID
  );
  const { userData } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop: (ingredient: TIngredient) => {
      dispatch(addIngredient(ingredient));
    },
  });

  const totalPrice = useMemo(() => {
    const ingredientsSum = getTotalPrice(ingredients);
    if (bun) {
      return bun.price * 2 + ingredientsSum;
    } else {
      return ingredientsSum;
    }
  }, [bun, ingredients]);

  const placeAnOrder = useCallback(() => {
    if (!userData) {
      return navigate(LOGIN_PAGE);
    } else {
      dispatch(getOrderId(bun, ingredients));
      dispatch({ type: REMOVE_ALL });
    }
  }, [navigate, dispatch, bun, ingredients, userData]);

  return (
    <section className={`mt-15 ${styles[`constructor-container`]}`}>
      <ul
        ref={dropTarget}
        style={{
          outlineStyle: isHover ? "solid" : "",
        }}
        className={`${styles.list}`}
      >
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
            {ingredients.map((item: TIngredient) => {
              return (
                <BurgerConstructorItem ingredient={item} key={item.uniqueId} />
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
          <CurrencyIcon type="primary" />
        </div>
        <Button
          disabled={bun ? false : true}
          htmlType="button"
          type="primary"
          size="large"
          onClick={placeAnOrder}
        >
          Оформить заказ
        </Button>
      </div>
      {(orderNumberRequest || orderNumberRequestSuccess) && (
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
