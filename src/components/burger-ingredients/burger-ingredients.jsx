import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import styles from "./burger-ingredients.module.css";
import { useState, useMemo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../services/actions/burger-ingredients";


const BurgerIngredients = () => {
  const data = useSelector((store) => store.items.items);

  const sausesRef = useRef();
  const mainsRef = useRef();
  const ingredientsListRef = useRef();

  const [current, setCurrent] = useState("bun");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  useEffect(() => {
    ingredientsListRef.current.addEventListener("scroll", () => {
      const sausesTitle = sausesRef.current.getBoundingClientRect().top;
      const mainTitle = mainsRef.current.getBoundingClientRect().top;
      const ingredientsListPanel = Math.abs(
        ingredientsListRef.current.getBoundingClientRect().top + 80
      );

      if (sausesTitle > ingredientsListPanel) {
        setCurrent("bun");
      } else if (mainTitle > ingredientsListPanel) {
        setCurrent("sauce");
      } else {
        setCurrent("main");
      }
    });
  }, []);

  const buns = useMemo(() => {
    return data.map((item) => {
      if (item.type === "bun") {
        return <BurgerIngredient key={item._id} ingredient={item} />;
      } else return null;
    });
  }, [data]);

  const sauces = useMemo(() => {
    return data.map((item) => {
      if (item.type === "sauce") {
        return <BurgerIngredient key={item._id} ingredient={item} />;
      } else return null;
    });
  }, [data]);

  const mains = useMemo(() => {
    return data.map((item) => {
      if (item.type === "main") {
        return <BurgerIngredient key={item._id} ingredient={item} />;
      } else return null;
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
      <div
        ref={ingredientsListRef}
        className={`${styles.scroll} custom-scroll`}
      >
        <h2 className="text text_type_main-medium mb-6">Булки</h2>
        <ul className={styles[`grid-container`]}>{buns}</ul>
        <h2 ref={sausesRef} className="text text_type_main-medium mt-10 mb-6">
          Соусы
        </h2>
        <ul className={styles[`grid-container`]}>{sauces}</ul>
        <h2 ref={mainsRef} className="text text_type_main-medium mt-10 mb-6">
          Начинки
        </h2>
        <ul className={styles[`grid-container`]}>{mains}</ul>
      </div>
      {/* {currentIngredient && (
        <Modal
          title="Детали ингредиента"
          onClose={() => {
            dispatch({ type: DELETE_CURRENT_INGREDIENT });
          }}
        >
          <IngredientDetails />
        </Modal>
      )} */}
    </section>
  );
};

export default BurgerIngredients;
