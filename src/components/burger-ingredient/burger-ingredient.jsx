import {
    Counter,
    CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredient.module.css';

const BurgerIngredient = ({ingredient}) => {
  return (
    <li className={styles.card}>
      <Counter className={styles.counter}/>
      <img src={ingredient.image} alt={ingredient.name} className={styles.image} />
      <div className={styles[`price-container`]}>
        <span className="text text_type_digits-default">{ingredient.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className={`${styles.name} text text_type_main-default`}>{ingredient.name}</h3>
    </li>
  );
};

export default BurgerIngredient