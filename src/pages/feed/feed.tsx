import styles from "./feed.module.css";

import { useEffect } from "react";
import {
  FEED_WS_CONNECTION_START,
  wsFeedConnectionFinished,
} from "../../services/actions/feed";
import OrdersStatus from "../../components/feed/orders-status/orders-status";
import OrdersList from "../../components/feed/orders-list/orders-list";
import Preloader from "../../components/preloader/preloader";
import { useSelector, useDispatch } from "../../services/hooks/hooks";
import { TOrdersData } from "../../components/ui/types";

const Feed = () => {
  const dispatch = useDispatch();
  const data: TOrdersData = useSelector((store) => store.feed.data);

  useEffect((): ()=> void => {
    dispatch({ type: FEED_WS_CONNECTION_START });
    return () => dispatch(wsFeedConnectionFinished());
  }, [dispatch]);

  if (!data) {
    return <Preloader />;
  }

  return (
    <div className={styles.main}>
      <h1 className={`text text_type_main-large mb-5 ${styles.header}`}>
        Лента заказов
      </h1>
      <div className={styles[`sections-container`]}>
        <OrdersList data={data} />
        <OrdersStatus data={data} />
      </div>
    </div>
  );
};

export default Feed;
