import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import HomePage from "../../pages/home";

function App() {
  return (
    <div className={styles.app}>
      <pre className={styles.pre}>
        <AppHeader />
        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </main>
      </pre>
    </div>
  );
}

export default App;
