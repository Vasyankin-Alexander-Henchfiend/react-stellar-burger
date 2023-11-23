import styles from "./order-details.module.css";
import done from "../../images/done.png";
import { useSelector } from "../../services/hooks/hooks";
import Preloader from "../preloader/preloader";

const OrderDetails = () => {
  const { orderNumber, orderNumberRequestSuccess } = useSelector(
    (store) => store.orderID
  );

  if (!orderNumberRequestSuccess) {
    return <Preloader/>;
  }
  return (
    <div className={styles[`order-details`]}>
      <p className="mb-8 mt-4 text text_type_digits-large">{orderNumber}</p>
      <p className="mb-15 text text_type_main-medium">идентификатор заказа</p>
      <img className="mb-15 " src={done} alt="Подтвердить заказ" />
      <p className="mb-2 text text_type_main-default">
        Ваш заказ начали готовить
      </p>
      <p className="mb-20 text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

export default OrderDetails;
