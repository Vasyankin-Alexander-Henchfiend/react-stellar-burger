import {
  CurrencyIcon,
  Button,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
// import PropTypes from "prop-types";
import Modal from "../modal/modal";
import { useMemo, useState, useContext } from "react";
import OrderDetails from "../order-details/order-details";
// import ingredientPropType from "../../utils/prop-types";
import { ApiDataContext } from "../../services/appContext";

const BurgerConstructor = () => {
  const { data } = useContext(ApiDataContext);
  const [modalActive, setModalActive] = useState(false);

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
          onClick={() => {
            setModalActive(true);
          }}
        >
          Оформить заказ
        </Button>
      </div>
      {modalActive && (
        <Modal
          title=""
          onClose={() => {
            setModalActive(false);
          }}
        >
          <OrderDetails orderId="034536" />
        </Modal>
      )}
    </section>
  );
};

// BurgerConstructor.propTypes = {
//   data: PropTypes.arrayOf(ingredientPropType.isRequired),
// };

export default BurgerConstructor;
