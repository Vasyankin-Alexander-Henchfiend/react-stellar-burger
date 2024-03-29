import styles from "./ingredient-details.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "../../services/hooks/hooks";
import { TIngredient } from "../ui/types";

const IngredientDetails = () => {
  const { id } = useParams();
  const data = useSelector((store) =>
  store.items.items.find((item: TIngredient) => item._id === id)
  );

  return (
    <div className={styles[`ingredient-details`]}>
      <img
        className={`mb-4 ${styles.image}`}
        src={data.image}
        alt={data.name}
      />
      <h3 className="mb-8 text text_type_main-medium">{data.name}</h3>
      <ul className={`mb-5 ${styles.list}`}>
        <li className={` ${styles.item}`}>
          <p className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {data.calories}
          </p>
        </li>
        <li className={` ${styles.item}`}>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {data.proteins}
          </p>
        </li>
        <li className={` ${styles.item}`}>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {data.fat}
          </p>
        </li>
        <li className={` ${styles.item}`}>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {data.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default IngredientDetails;
