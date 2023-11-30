//Этот файл хранит типы которые требуются нескольким компанентам
//Тип для данных любого ингредиента бургера
export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteinse: number;
  fate: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  uniqueId?: string;
};


export type TOrdersData = {
  orders: TOrder[],
  total: number,
  totalToday: number
}

//Тип для данных любого заказа
export type TOrder = {
  _id: string;
  ingredients: string[];
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
};

