const sendReq = async (verb, query, data, token) => {
  const res = await fetch(`https://blog-api-5lv9.onrender.com/api/${query}`, {
    method: verb,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
    body: JSON.stringify(data),
  });

  return res;
};

const saveDataAndTriggerStorage = json => {
  localStorage.setItem('token', json.data.token);
  localStorage.setItem('user', JSON.stringify(json.data.user));
  window.dispatchEvent(new Event('storage'));
};

const getStorageItem = (key, isObj) => {
  if (isObj) return JSON.parse(localStorage.getItem(key));
  return localStorage.getItem(key);
};

export {
  sendReq,
  saveDataAndTriggerStorage,
  getStorageItem,
};