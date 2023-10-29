import styles from "./orders-status.module.css";
import { useMemo } from "react";

const OrdersStatus = ({ data }) => {
  const {orders=[], total=0, totalToday=0} = data;

  const completeOrders = useMemo(() => {
    return orders
      .filter(({ status }) => status === "done")
      .map((item) => {
        return <li key={item._id} className={`text text_type_digits-default ${styles[`order-number-complite`]}`}>{item.number}</li>;
      });
  }, [orders]);

  const ordersInWork = useMemo(() => {
    return orders
      .filter(({ status }) => status !== "done")
      .map((item) => {
        return <li key={item._id} className='text text_type_digits-default'>{item.number}</li>;
      });
  }, [orders]);

  return (
    <section className={styles[`order-status-section`]}>
      <div className={styles[`order-status-table`]}>
        <div>
          <p className="text text_type_main-medium mb-6">Готовы:</p>
          <ul className={styles.list}>{completeOrders}</ul>
        </div>
        <div>
          <p className="text text_type_main-medium mb-6">В работе:</p>
          <ul className={styles.list}>{ordersInWork}</ul>
        </div>
      </div>
      <div className={styles[`total-number-wrapper`]}>
        <p className="text text_type_main-medium">Выполнено за все время:</p>
        <p className="text text_type_digits-large">{total}</p>
      </div>
      <div className={styles[`total-number-wrapper`]}>
        <p className="text text_type_main-medium">Выполнено за сегодня:</p>
        <p className="text text_type_digits-large">{totalToday}</p>
      </div>
    </section>
  );
};

export default OrdersStatus;
