import { useDispatch, useSelector } from "react-redux";
import {
  ORDERS_HISTORY_WS_CONNECTION_START,
  wsOrdersHistoryConnectionFinished,
} from "../../services/actions/orders-history";
import styles from "./orders-history.module.css";
import { useEffect, useMemo } from "react";
import OrderCard from "../feed/order-card/order-card";

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
    dispatch({ type: ORDERS_HISTORY_WS_CONNECTION_START });
    return () => dispatch(wsOrdersHistoryConnectionFinished());
  }, [dispatch]);

  if (!data || !Array.isArray(data.orders)) {
    return <div>Ждите!</div>;
  }
  return <ul className={` ${styles.list}`}>{ordersList}</ul>;
};

export default OdersHistory;