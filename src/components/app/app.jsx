import React, { useEffect } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { URL, getData } from "../../utils/consts";
import { ApiDataContext } from '../../services/appContext';

function App() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    getData(URL, setData);
  }, []);

  return (
    <div className={styles.app}>
      <pre className={styles.pre}>
        <AppHeader />
        <main className={styles.main}>
          <ApiDataContext.Provider value={{data}}>
            <BurgerIngredients />
            <BurgerConstructor />
          </ApiDataContext.Provider>
        </main>
      </pre>
    </div>
  );
}

export default App;
