import styles from "./orders-list.module.css";
import { useMemo } from "react";
import OrderCard from "../../order-card/order-card";
import { Link, useLocation } from "react-router-dom";

const OrdersList = ({ data }) => {
  const { orders = [] } = data;
  const location = useLocation();

  const ordersList = useMemo(() => {
    return orders.map((order, index) => {
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
  }, [orders, location]);

  return (
    <section className={styles[`list-wrapper`]}>
      <ul className={`${styles.list} custom-scroll`}>{ordersList}</ul>
    </section>
  );
};

export default OrdersList;
