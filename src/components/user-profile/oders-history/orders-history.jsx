import { useDispatch, useSelector } from "react-redux";
import {
  wsOrdersHistoryConnectionFinished,
  wsOrdersHistoryConnectionStart,
} from "../../../services/actions/orders-history";
import styles from "./orders-history.module.css";
import { useEffect, useMemo } from "react";
import OrderCard from "../../feed/order-card/order-card";

const OdersHistory = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.ordersHistory);
  const orders = data?.orders;

  const ordersList = useMemo(() => {
    return orders?.map((order) => {
      return <OrderCard order={order} />;
    });
  }, [orders]);

  useEffect(() => {
    dispatch(wsOrdersHistoryConnectionStart());
    return () => dispatch(wsOrdersHistoryConnectionFinished());
  }, [dispatch]);

  if (!data || !Array.isArray(data.orders)) {
    return <div>Ждите!</div>;
  }
  return (
    <section className={styles[`list-container`]}>
      <ul className={`${styles.list} custom-scroll`}>{ordersList}</ul>
    </section>
  );
};

export default OdersHistory;
