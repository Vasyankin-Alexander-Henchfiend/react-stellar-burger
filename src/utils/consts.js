export const BASE_URL = 'https://norma.nomoreparties.space/api';

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