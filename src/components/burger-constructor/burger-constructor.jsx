import {
  CurrencyIcon,
  Button,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";

const BurgerConstructor = ({ data }) => {
  const bun = data.find((item) => item.type === "bun");

  return (
    <section className={`mt-15 ${styles[`constructor-container`]}`}>
      <ul className={`${styles.list}`}>
        <li className={`ml-8 pl-4 pr-4 ${styles.item}`}>
          <ConstructorElement
            type="top"
            isLocked={true}
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
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image}
          />
        </li>
      </ul>
      <div className={`pr-6 ${styles[`price-container`]}`}>
        <span className="text text_type_digits-medium">610</span>
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

export default BurgerConstructor;
