import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient.module.css";
import PropTypes from "prop-types";
import dataPropTypes from "../../utils/utils";

const BurgerIngredient = ({ ingredient, openIngredientDetails }) => {
  const number = 0;
  return (
    <li className={styles.card} onClick={() => {openIngredientDetails(ingredient)}}>
      {number > 0 ? (
        <Counter count={number} size="default" extraClass={styles.counter} />
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

BurgerIngredient.propTypes = dataPropTypes;

export default BurgerIngredient;