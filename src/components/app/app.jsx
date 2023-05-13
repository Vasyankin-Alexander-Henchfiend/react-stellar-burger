import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

function App() {
  return (
    <div className={styles.app}>
      <pre style={{
        margin: 0,
      	fontSize: "1.5rem"
      }}>
      	<AppHeader  />
        <main>
          <BurgerIngredients data={data}/>
        </main>
      </pre>
    </div>
  );
}

export default App;
