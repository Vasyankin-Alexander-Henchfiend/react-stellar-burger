export const BASE_URL = 'https://norma.nomoreparties.space/api';
export const HOME = '/';
export const LOGIN_PAGE = '/login';
export const FORGOT_PASSWORD_PAGE = '/forgot-password';
export const RESET_PASSWORD_PAGE = '/reset-password';
export const PROFILE_PAGE = '/profile';
export const ORDERS_HISTORY_PAGE = '/profile/orders';
export const INGREDIENT_DETAILS_PAGE = '/ingredients/:id'
export const REGISTER_PAGE = '/register';

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Возникла ошибка ${res.status}`);
};

export const ingredientsId = (bun, ingredients) => {
  let ingredientsId = [];
  ingredientsId.push(bun._id,
    ...ingredients.map((item) => item._id),
    bun._id)
  return ingredientsId
}