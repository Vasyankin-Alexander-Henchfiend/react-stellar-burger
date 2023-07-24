const URL = "https://norma.nomoreparties.space/api/ingredients";

const getData = async (setData) => {
  let item = [];
  try {
    const res = await fetch(URL);
    return res.ok
      ? ((item = await res.json()), setData(item.data))
      : res.json().then((err) => Promise.reject(err));
  } catch (e) {
    return console.log(`'Что-то пошло не так ${e}'`);
  }
};

const POSTURL = "https://norma.nomoreparties.space/api/orders";

async function getOrderId(bun, ingredients, setOrderId, setModalActive) {
  const ingredientsId = [
    bun._id,
    ...ingredients.map((item) => item._id),
    bun._id,
  ];
  let item = null;
  try {
    const res = await fetch(POSTURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        ingredients: ingredientsId,
      }),
    });
    return res.ok
      ? ((item = await res.json()),
        setOrderId(item.order.number),
        setModalActive(true))
      : res.json().then((err) => Promise.reject(err));
  } catch (e) {
    return console.log(`'Что-то пошло не так ${e}'`);
  }
}

export { getData, getOrderId };
