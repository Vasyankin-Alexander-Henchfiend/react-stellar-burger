import React from 'react';
import {
    Counter,
    CurrencyIcon,
    Tab
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';

const BurgerIngredients = ({ data }) => {
  return (
    <section className="#">
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div style={{ display: "flex" }}>
        <h2>Переключатель тут</h2>
      </div>
      <div className="#">
        <h2 className="text text_type_main-default">Булки</h2>
        {data.map((item) => {
          return (
            <div className="#">
              <Counter />
              <img src={item.image} alt={item.name} className="#" />
              <div>
                <span className="text text_type_digits-default">
                  {item.price}
                </span>
                <CurrencyIcon type="primary" />
              </div>
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
      <h2 className="text text_type_main-default">Соусы</h2>
      <h2 className="text text_type_main-default">Начинки</h2>
    </section>
  );
};

export default BurgerIngredients;