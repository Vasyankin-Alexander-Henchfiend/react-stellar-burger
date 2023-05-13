import {
    Tab
} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import styles from './burger-ingredients.module.css';

const BurgerIngredients = ({ data }) => {
  return (
    <section className={styles[`ingredients-list`]}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div style={{ display: "flex" }}>
        <h2>Переключатель тут</h2>
      </div>
      <h2 className="text text_type_main-large">Булки</h2>
      <div className={styles[`grid-container`]}>
        {data.map((item) => {
          if (item.type === "bun") {
            return <BurgerIngredient ingredient={item} />;
          } else return null;
        })}
      </div>
      <h2 className="text text_type_main-large">Соусы</h2>
      <div className={styles[`grid-container`]}>
        {data.map((item) => {
          if (item.type === "sauce") {
            return <BurgerIngredient ingredient={item} />;
          } else return null;
        })}
      </div>
      <h2 className="text text_type_main-large">Начинки</h2>
      <div className={styles[`grid-container`]}>
        {data.map((item) => {
          if (item.type === "main") {
            return <BurgerIngredient ingredient={item} />;
          } else return null;
        })}
      </div>
    </section>
  );
};

export default BurgerIngredients;