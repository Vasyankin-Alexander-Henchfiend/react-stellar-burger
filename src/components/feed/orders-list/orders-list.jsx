import styles from "./orders-list.module.css";
import { useMemo } from "react";
import OrderCard from "../order-card/order-card";

const OrdersList = ({ data }) => {
  const { orders = [] } = data;

  const ordersList = useMemo(() => {
    return orders.map((order, index) => {
      return <OrderCard key={`${order._id} + ${index}`} order={order} />;
    });
  }, [orders]);

  return (
    <section className={styles[`list-wrapper`]}>
      <ul className={`${styles.list} custom-scroll`}>{ordersList}</ul>
    </section>
  );
};

export default OrdersList;
