import styles from "./app.module.css";
import { data } from "../../utils/data";
import { constructorData } from '../../utils/constructor-data';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {
  return (
    <div className={styles.app}>
      <pre style={{
        margin: 0,
      	fontSize: "1.5rem"
      }}>
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
