import {
    ConstructorElement,
    DragIcon
  } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-constructor-item.module.css';
import { DELETE_ITEM } from '../../services/actions/burger-constructor';
import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";


const BurgerConstructorItem = ({item}) => {
    const dispatch = useDispatch();

    const [{ opacity }, dragRef] = useDrag({
        type: "ingredient",
        item: item,
        collect: (monitor) => ({
          opacity: monitor.isDragging() ? 0.5 : 1,
        }),
      });

    return (
      <li ref={dragRef} style={{ opacity }} className={`pl-4 pr-4 ${styles.item}`}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={item.name}
          price={item.price}
          thumbnail={item.image}
          handleClose={() => {
            dispatch({ type: DELETE_ITEM, id: item.uniqueId });
          }}
        />
      </li>
    );
}

export default BurgerConstructorItem;