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

const useFetch = (query, initVal = null, deps = []) => {
  const [data, setData] = useState(initVal);

  useEffect(() => {
    if (query) {
      fetch(`https://blog-api-5lv9.onrender.com/api/${query}`)
      .then(res => res.json())
      .then(json => setData(json.data))
      .catch(err => setData(err));
    }
  }, deps);

  return [data, setData];
};

const useLoading = data => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (data) setLoaded(true);
  }, [data]);

  return [loaded, setLoaded];
};

export {
  useStorageListener,
  useFetch,
  useLoading,
};