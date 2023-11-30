import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor-item.module.css";
import { useRef } from "react";
import {
  DELETE_ITEM,
  GET_ITEM,
  MOVE_ITEM,
} from "../../../services/actions/burger-constructor";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { useSelector } from "../../../services/hooks/hooks";
import {
  TBurgerConstructorIngredient,
  TDropItem,
} from "./burger-constructor-item.types";
import { TIngredient } from "../../ui/types";

const BurgerConstructorItem = ({
  ingredient,
}: TBurgerConstructorIngredient) => {
  const { ingredients } = useSelector(
    (store) => store.selectedItems.selectedItems
  );
  const index = ingredients.findIndex(
    (item: TIngredient) => item.uniqueId === ingredient.uniqueId
  );
  const dispatch = useDispatch();

  const ref = useRef<HTMLLIElement>(null);

  const moveCard = (dragIndex: number, hoverIndex: number) => {
    const dragCard = ingredients[dragIndex];
    const newCards = [...ingredients];
    newCards.splice(dragIndex, 1);
    newCards.splice(hoverIndex, 0, dragCard);
    dispatch({ type: MOVE_ITEM, movedIngredient: [...newCards] });
  };
  const [, dropRef] = useDrop({
    accept: "item",
    hover: (item: TDropItem, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffcet = monitor.getClientOffset();
      if (clientOffcet) {
        const hoverClientY = clientOffcet.y - hoverBoundingRect.top;
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ opacity }, dragRef] = useDrag({
    type: "item",
    item: () => {
      const id = ingredient._id;
      return { id, index };
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0 : 1,
    }),
  });

  dragRef(dropRef(ref));
  return (
    <li ref={ref} style={{ opacity }} className={`pl-4 pr-4 ${styles.item}`}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => {
          dispatch({ type: DELETE_ITEM, id: ingredient.uniqueId });
        }}
      />
    </li>
  );
};

export default BurgerConstructorItem;
