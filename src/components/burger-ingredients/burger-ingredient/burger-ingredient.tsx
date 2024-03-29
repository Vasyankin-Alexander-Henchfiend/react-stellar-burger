import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient.module.css";
import { useSelector } from "../../../services/hooks/hooks";
import ingredientPropType from "../../../utils/prop-types";
import { useDrag } from "react-dnd";
import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { TIngredientItem } from "./burger-ingredient.types";
import { TIngredient } from "../../ui/types";

const BurgerIngredient = ({ ingredient }: TIngredientItem) => {
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

  const countNumder = useMemo(() => {
    if (bun && ingredient._id === bun._id) {
      return 2;
    } else if (ingredients.length > 0) {
      const ingredientArray = ingredients.filter(
        (item: TIngredient) => item._id === ingredient._id
      );
      return ingredientArray.length;
    } else return 0;
  }, [bun, ingredients, ingredient]);

  const location = useLocation();
  const id = ingredient[`_id`];

  return (
    <Link
      key={id}
      to={`/ingredients/${id}`}
      state={{ background: location }}
      className={styles.link}
    >
      <li ref={dragRef} style={{ opacity }} className={styles.card}>
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
    </Link>
  );
};

BurgerIngredient.propTypes = {
  ingredient: ingredientPropType.isRequired,
};

export default BurgerIngredient;
