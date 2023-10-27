import styles from "./orders-list.module.css";
import { useMemo } from "react";
import OrderCard from "../order-card/order-card";

const OrdersList = ({ data }) => {
  const { orders = [] } = data;

  const ordersList = useMemo(() => {
    return orders.map((order) => {
      return <OrderCard order={order} />;
    });
  }, [orders]);

  return (
    <section>
      <ul className={styles.list}>{ordersList}</ul>
    </section>
  );
};

export default OrdersList;
