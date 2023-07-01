import {
  CurrencyIcon,
  Button,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import dataPropTypes from "../../utils/utils";

const BurgerConstructor = ({ data }) => {
  const bun = data.length > 0 && data.find(item => item.type === "bun");
  const ingredients = data.filter(item => item.type !== "bun")
  const totalPrice = bun.price + ingredients.reduce((totalAll, item ) => totalAll + item.price, 0)

  return (
    <section className={`mt-15 ${styles[`constructor-container`]}`}>
      <ul className={`${styles.list}`}>
        <li className={`ml-8 pl-4 pr-4 ${styles.item}`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            key={bun._id}
            text={bun.name}
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
            text={bun.name}
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
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(dataPropTypes)).isRequired
}

export default BurgerConstructor;
