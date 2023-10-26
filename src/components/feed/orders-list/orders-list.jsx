import styles from './orders-list.module.css'
import {
    CurrencyIcon,
    FormattedDate,
  } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from 'react-redux';

const OrdersList = ({ data }) => {
    const { orders=[] } = data;
    const { items } = useSelector((store) => store.items);


    return ( 
        <section>
            <ul>
              <li>
                <div>
                  <div>
                    <span></span>
                    <span></span>
                  </div>
                  <h2>Content</h2>
                  <div>
                    <div></div>
                    <span></span>
                    <CurrencyIcon type="primary" />
                  </div>
                </div>
              </li>
            </ul>
          </section>
     );
}
 
export default OrdersList;