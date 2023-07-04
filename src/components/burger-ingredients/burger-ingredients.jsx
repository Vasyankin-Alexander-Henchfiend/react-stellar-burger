import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import styles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
import dataPropTypes from "../../utils/utils";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

const BurgerIngredients = ({ data }) => {
  const [current, setCurrent] = React.useState("bun");
  const [modalActive, setModalActive] = React.useState(false)
  const [activeIngredient, setActiveIngredient] = React.useState()

  const openIngredientDetails = (ingredient) => {
    setModalActive(true)
    setActiveIngredient(ingredient)
  }

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
        <ul className={styles[`grid-container`]}>
          {data.map(item => {
            return (item.type === "bun") ? <BurgerIngredient key={item._id} ingredient={item} openIngredientDetails={openIngredientDetails}/> : null;
          })}
        </ul>
        <h2 className="text text_type_main-medium mt-10 mb-6">Соусы</h2>
        <ul className={styles[`grid-container`]}>
          {data.map(item => {
            return (item.type === "sauce") ? <BurgerIngredient key={item._id} ingredient={item} openIngredientDetails={openIngredientDetails}/> : null;
          })}
        </ul>
        <h2 className="text text_type_main-medium mt-10 mb-6">Начинки</h2>
        <ul className={styles[`grid-container`]}>
          {data.map(item => {
            return (item.type === "main") ? <BurgerIngredient key={item._id} ingredient={item} openIngredientDetails={openIngredientDetails}/> : null;
          })}
        </ul>
      </div>
      {modalActive && (
        <Modal title='Детали ингредиента'  onClose={() => {setModalActive(false)}}>
          <IngredientDetails data={activeIngredient}/>
        </Modal>
      )}
    </section>
  );
};

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(dataPropTypes)).isRequired
}

export default BurgerIngredients;
