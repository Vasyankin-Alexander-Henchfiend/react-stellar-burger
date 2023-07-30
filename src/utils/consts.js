export const URL = "https://norma.nomoreparties.space/api/ingredients";
export const POSTURL = "https://norma.nomoreparties.space/api/orders";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Возникла ошибка ${res.status}`);
};

export const getData = async (setData) => {
  let item = [];
  try {
    const res = await fetch(URL);
    return res.ok
      ? ((item = await res.json()), setData(item.data))
      : checkResponse(res);
  } catch (e) {
    return console.log(`'Что-то пошло не так ${e}'`);
  }
};

export const ingredientsId = (bun, ingredients) => {
  let ingredientsId = [];
  ingredientsId.push(bun._id,
    ...ingredients.map((item) => item._id),
    bun._id)
  return ingredientsId
}