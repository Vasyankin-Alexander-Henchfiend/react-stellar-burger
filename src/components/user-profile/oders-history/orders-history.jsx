import { useDispatch, useSelector } from "react-redux";
import {
  wsOrdersHistoryConnectionFinished,
  wsOrdersHistoryConnectionStart,
} from "../../../services/actions/orders-history";
import styles from "./orders-history.module.css";
import { useEffect, useMemo } from "react";
import OrderCard from "../../order-card/order-card";
import Preloader from "../../preloader/preloader";
import { Link, useLocation } from "react-router-dom";

const OdersHistory = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { data } = useSelector((store) => store.ordersHistory);
  const orders = data?.orders;

  const ordersList = useMemo(() => {
    return orders?.map((order, index) => {
      return (
        <Link
          key={`${order._id} + ${index}`}
          to={`/profile/orders/${order.number}`}
          className={styles.link}
          state={{ background: location }}
        >
          <OrderCard order={order} displayStatus={true} />
        </Link>
      );
    });
  }, [orders, location]);

  useEffect(() => {
    dispatch(wsOrdersHistoryConnectionStart());
    return () => dispatch(wsOrdersHistoryConnectionFinished());
  }, [dispatch]);

  if (!data || !Array.isArray(data.orders)) {
    return <Preloader />;
  }
  return (
    <section className={styles[`list-container`]}>
      <ul className={`${styles.list} custom-scroll`}>{ordersList}</ul>
    </section>
  );
};

export default OdersHistory;
