import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient.module.css";
import { useSelector, useDispatch } from "react-redux";
import ingredientPropType from "../../utils/prop-types";
import { useDrag } from "react-dnd";
import { useMemo } from "react";
import { SET_CURRENT_INGREDIENT } from "../../services/actions/ingredient-details";

const BurgerIngredient = ({ ingredient }) => {
  const { bun, ingredients } = useSelector(
    (store) => store.selectedItems.selectedItems
  );
  const dispatch = useDispatch();

  const openIngredientDetails = () => {
    dispatch({ type: SET_CURRENT_INGREDIENT, currentIngredient: ingredient });
  };

  const [{ opacity }, dragRef] = useDrag({
    type: "ingredient",
    item: ingredient,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  const countNumder = useMemo(() => {
    if (bun && ingredient._id === bun._id) {
      return 2;
    } else if (ingredients.length > 0) {
      const ingredientArray = ingredients.filter(
        (item) => item._id === ingredient._id
      );
      return ingredientArray.length;
    } else return 0;
  }, [bun, ingredients, ingredient]);

  return (
    <li
      ref={dragRef}
      style={{ opacity }}
      className={styles.card}
      onClick={() => openIngredientDetails()}
    >
      {countNumder > 0 ? (
        <Counter
          count={countNumder}
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
};

export default BurgerIngredient;
