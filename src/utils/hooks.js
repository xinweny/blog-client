import { useState, useEffect } from 'react';

const useStorageListener = key => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = () => {
      const item = localStorage.getItem(key);
      setData(JSON.parse(item));
    };

    getData();

    window.addEventListener('storage', getData);

    return () => window.removeEventListener('storage', getData);
  }, []);

  return data;
};

const useFetch = (query, deps = []) => {
  const [data, setData] = useState();

  useEffect(() => {
    if (query) {
      fetch(`https://blog-api-5lv9.onrender.com/api/${query}`)
      .then(res => res.json())
      .then(json => setData(json.data));
    }
  }, deps);

  return data;
};

export {
  useStorageListener,
  useFetch,
};