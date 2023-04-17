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
}

export {
  sendReq,
};