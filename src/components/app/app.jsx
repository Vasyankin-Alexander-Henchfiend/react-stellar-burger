import React, {useEffect} from "react";
import styles from "./app.module.css";
import { constructorData } from '../../utils/constructor-data';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

const URL = 'https://norma.nomoreparties.space/api/ingredients';


function App() {

  const[data, setData] = React.useState([])

  useEffect(() => {
    const getData = async () => {
    try {
        const res = await fetch(URL);
        const item = await res.json();
        return setData(item.data);
      } catch (e) {
        return console.log(`'Что-то пошло не так ${e}'`);
      }
    }
    getData()
  }, [])

  return (
    <div className={styles.app}>
      <pre className={styles.pre}>
      	<AppHeader  />
        <main className={styles.main}>
          <BurgerIngredients data={data}/>
          <BurgerConstructor data={constructorData}/>
        </main>
      </pre>
    </div>
  );
}

export default App;
