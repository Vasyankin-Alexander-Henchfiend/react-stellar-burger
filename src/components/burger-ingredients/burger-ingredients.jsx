import { useState, useMemo, useEffect } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import styles from "./burger-ingredients.module.css";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../services/actions/burger-ingredients";
import { SET_CURRENT_INGREDIENT, DELETE_CURRENT_INGREDIENT } from "../../services/actions/ingredient-details";

const BurgerIngredients = () => {
  const [current, setCurrent] = useState("bun");

  const data = useSelector((store) => store.items.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, []);

  const currentIngredient = useSelector((store) => store.currentIngredient.currentIngredient)

  const openIngredientDetails = (ingredient) => {
    dispatch({ type: SET_CURRENT_INGREDIENT, currentIngredient: ingredient})
  };

  const buns = useMemo(() => {
    return data.map((item) => {
      if (item.type === "bun") {
        return (
          <BurgerIngredient
            key={item._id}
            ingredient={item}
            openIngredientDetails={openIngredientDetails}
          />
        );
      }
    });
  }, [data]);

  const sauces = useMemo(() => {
    return data.map((item) => {
      if (item.type === "sauce") {
        return (
          <BurgerIngredient
            key={item._id}
            ingredient={item}
            openIngredientDetails={openIngredientDetails}
          />
        );
      }
    });
  }, [data]);

  const mains = useMemo(() => {
    return data.map((item) => {
      if (item.type === "main") {
        return (
          <BurgerIngredient
            key={item._id}
            ingredient={item}
            openIngredientDetails={openIngredientDetails}
          />
        );
      }
    });
  }, [data]);

  return (
    <section className={styles[`ingredients-list`]}>
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
      <div className={`mb-10 ${styles.tabs}`}>
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={`${styles.scroll} custom-scroll`}>
        <h2 className="text text_type_main-medium mb-6">Булки</h2>
        <ul className={styles[`grid-container`]}>{buns}</ul>
        <h2 className="text text_type_main-medium mt-10 mb-6">Соусы</h2>
        <ul className={styles[`grid-container`]}>{sauces}</ul>
        <h2 className="text text_type_main-medium mt-10 mb-6">Начинки</h2>
        <ul className={styles[`grid-container`]}>{mains}</ul>
      </div>
      {currentIngredient && (
        <Modal
          title="Детали ингредиента"
          onClose={() => {
            dispatch({type: DELETE_CURRENT_INGREDIENT});
          }}
        >
          <IngredientDetails />
        </Modal>
      )}
    </section>
  );
};

export default BurgerIngredients;
