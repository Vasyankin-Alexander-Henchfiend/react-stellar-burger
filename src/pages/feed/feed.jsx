import styles from "./feed.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FEED_WS_CONNECTION_START,
  wsConnectionClosed,
} from "../../services/actions/feed";
import OrdersStatus from "../../components/feed/orders-status/orders-status";
import OrdersList from "../../components/feed/orders-list/orders-list";

const Feed = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.feed);

  useEffect(() => {
    dispatch({ type: FEED_WS_CONNECTION_START });
    return () => dispatch(wsConnectionClosed());
  }, [dispatch]);

  if (!data) {
    return <div>Ждите!</div>;
  } else {
    return (
      <div className={styles.main}>
        <h1 className={`text text_type_main-large mb-5 ${styles.header}`}>
          Лента заказов
        </h1>
        <div className={styles[`sections-container`]}>
          <OrdersList data={data}/>
          <OrdersStatus data={data} />
        </div>
      </div>
    );
  }
};

export default Feed;
