import { TIngredient } from "../components/ui/types";

export const BASE_URL = "https://norma.nomoreparties.space/api";
export const HOME = "react-stellar-burger/";
export const LOGIN_PAGE = "/login";
export const FORGOT_PASSWORD_PAGE = "/forgot-password";
export const RESET_PASSWORD_PAGE = "/reset-password";
export const PROFILE_PAGE = "react-stellar-burger/profile";
export const ORDERS_HISTORY_PAGE = "/profile/orders";
export const INGREDIENT_DETAILS_PAGE = "/ingredients/:id";
export const REGISTER_PAGE = "/register";
export const FEED_PAGE = "react-stellar-burger/feed";
export const FEED_PAGE_ORDER_NUMBER = "feed/:orderNumber";
export const PROFILE_PAGE_ORDERS_ORDER_NUMBER = "profile/orders/:orderNumber";

export const cleanTokenHeader = (token: string) => {
  if (token && token.indexOf("Bearer") === 0) {
    return token.split("Bearer ")[1];
  } return ''
};

export const checkResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Возникла ошибка ${res.status}`);
};

export const ingredientsId = (bun: TIngredient, ingredients: TIngredient[]) => {
  let ingredientsId = [];
  ingredientsId.push(bun._id, ...ingredients.map((item) => item._id), bun._id);
  return ingredientsId;
};

export function getUniqFiltredIngredients(ingredients: TIngredient[]) {
  return ingredients?.reduce((acc: TIngredient[], item: TIngredient) => {
    if (acc.includes(item)) {
      return acc;
    }
    return [...acc, item];
  }, []);
}

export function getTotalPrice(ingredients: TIngredient[]) {
  return ingredients?.reduce(
    (totalAll: number, item: TIngredient) => totalAll + item.price,
    0
  );
}

export function getFiltredIngredients(
  ingredients: string[],
  items: TIngredient[]
) {
  return ingredients
    ?.map((id) => {
      return items.filter(({ _id }) => _id === id);
    })
    .flat(2);
}
