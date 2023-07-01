import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import styles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
import dataPropTypes from "../../utils/utils";

const BurgerIngredients = ({ data }) => {
  const [current, setCurrent] = React.useState("bun");

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
        <h2 className="text text_type_main-large mb-6">Булки</h2>
        <ul className={styles[`grid-container`]}>
          {data.map(item => {
            return (item.type === "bun") ? <BurgerIngredient key={item._id} ingredient={item} /> : null;
          })}
        </ul>
        <h2 className="text text_type_main-large mt-10 mb-6">Соусы</h2>
        <ul className={styles[`grid-container`]}>
          {data.map(item => {
            return (item.type === "sauce") ? <BurgerIngredient key={item._id} ingredient={item} /> : null;
          })}
        </ul>
        <h2 className="text text_type_main-large mt-10 mb-6">Начинки</h2>
        <ul className={styles[`grid-container`]}>
          {data.map(item => {
            return (item.type === "main") ? <BurgerIngredient key={item._id} ingredient={item} /> : null;
          })}
        </ul>
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(dataPropTypes)).isRequired
}

export default BurgerIngredients;
