import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient.module.css";
import PropTypes from "prop-types";
import ingredientPropType from "../../utils/prop-types";
import { useDrag } from "react-dnd";

const BurgerIngredient = ({ ingredient, openIngredientDetails }) => {
  const [{ opacity }, dragRef] = useDrag({
    type: "ingredient",
    item: ingredient,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });
  const number = ingredient.__v;
  return (
    <li
      ref={dragRef}
      style={{ opacity }}
      className={styles.card}
      onClick={() => {
        openIngredientDetails(ingredient);
      }}
    >
      {number > 0 ? (
        <Counter
          count={ingredient.__v}
          size="default"
          extraClass={styles.counter}
        />
      ) : null}
      <img
        src={ingredient.image}
        alt={ingredient.name}
        className={styles.image}
      />
      <div className={styles[`price-container`]}>
        <span className="text text_type_digits-default">
          {ingredient.price}
        </span>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className={`${styles.name} text text_type_main-default`}>
        {ingredient.name}
      </h3>
    </li>
  );
};

BurgerIngredient.propTypes = {
  ingredient: ingredientPropType.isRequired,
  openIngredientDetails: PropTypes.func.isRequired,
};

export default BurgerIngredient;
