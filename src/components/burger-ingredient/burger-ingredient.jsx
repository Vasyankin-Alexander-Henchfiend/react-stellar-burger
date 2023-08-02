import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient.module.css";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import ingredientPropType from "../../utils/prop-types";
import { useDrag } from "react-dnd";
import { useMemo } from "react";

const BurgerIngredient = ({ ingredient, openIngredientDetails }) => {

  const { bun, ingredients } = useSelector(
    (store) => store.selectedItems.selectedItems
  );

  const [{ opacity }, dragRef] = useDrag({
    type: "ingredient",
    item: ingredient,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  const countNumder = useMemo(() =>{
    const a = ingredients.filter((item) => item.name === ingredient.name)
    if (ingredient === bun) {
      return 2
    } else if (ingredients.includes(ingredient)) {
      return a.length
    }
    else return 0
  }, [bun, ingredients, ingredient])


  return (
    <li
      ref={dragRef}
      style={{ opacity }}
      className={styles.card}
      onClick={() => {
        openIngredientDetails(ingredient);
      }}
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
  openIngredientDetails: PropTypes.func.isRequired,
};

export default BurgerIngredient;
