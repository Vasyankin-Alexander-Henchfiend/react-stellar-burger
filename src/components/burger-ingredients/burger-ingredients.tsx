import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredient from "./burger-ingredient/burger-ingredient";
import styles from "./burger-ingredients.module.css";
import { useState, useMemo, useEffect, useRef } from "react";
import { useSelector } from "../../services/hooks/hooks";
import { TIngredient } from "../ui/types";

const BurgerIngredients = () => {
  const { items } = useSelector((store) => store.items);

  const sausesRef = useRef<HTMLHeadingElement>(null);
  const mainsRef = useRef<HTMLHeadingElement>(null);
  const ingredientsListRef = useRef<HTMLDivElement>(null);

  const [current, setCurrent] = useState("bun");

  useEffect(() => {
    if (ingredientsListRef.current) {
      ingredientsListRef.current.addEventListener("scroll", () => {
        if (
          sausesRef.current &&
          mainsRef.current &&
          ingredientsListRef.current
        ) {
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
        }
      });
    }
  }, []);

  const buns = useMemo(() => {
    return items.map((item: TIngredient) => {
      if (item.type === "bun") {
        return <BurgerIngredient key={item._id} ingredient={item} />;
      } else return null;
    });
  }, [items]);

  const sauces = useMemo(() => {
    return items.map((item: TIngredient) => {
      if (item.type === "sauce") {
        return <BurgerIngredient key={item._id} ingredient={item} />;
      } else return null;
    });
  }, [items]);

  const mains = useMemo(() => {
    return items.map((item: TIngredient) => {
      if (item.type === "main") {
        return <BurgerIngredient key={item._id} ingredient={item} />;
      } else return null;
    });
  }, [items]);

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
    </section>
  );
};

export default BurgerIngredients;
