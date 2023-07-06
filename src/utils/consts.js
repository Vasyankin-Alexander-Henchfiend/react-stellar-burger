const URL = 'https://norma.nomoreparties.space/api/ingredients';

const getData = async (URL, setData) => {
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

export { URL, getData }