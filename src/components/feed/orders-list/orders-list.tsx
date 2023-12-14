import styles from "./orders-list.module.css";
import OrderCard from "../../order-card/order-card";
import { Link, useLocation } from "react-router-dom";
import { TOrdersList } from "./orders-list.types";
import { TOrder } from "../../ui/types";

const OrdersList = ({ data }: TOrdersList) => {
  const { orders = [] } = data;
  const location = useLocation();

  const ordersList = orders.map((order: TOrder, index: number) => {
      return (
        <Link
          key={`${order._id} + ${index}`}
          to={`/feed/${order.number}`}
          className={styles.link}
          state={{ background: location }}
        >
          <OrderCard order={order} displayStatus={false} />
        </Link>
      );
    });

  return (
    <section className={styles[`list-wrapper`]}>
      <ul className={`${styles.list} custom-scroll`}>{ordersList}</ul>
    </section>
  );
};

export default OrdersList;
