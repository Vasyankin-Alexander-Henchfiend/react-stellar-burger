import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import HomePage from "../../pages/home/home";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <pre className={styles.pre}>
          <AppHeader />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
        </pre>
      </BrowserRouter>
    </div>
  );
}

export default App;