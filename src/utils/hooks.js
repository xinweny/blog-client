import { useState, useEffect } from 'react';

const useStorageListener = key => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = () => {
      const item = localStorage.getItem(key);
      setData(JSON.parse(item));
    };

    window.addEventListener('storage', getData);

    return () => window.removeEventListener('storage', getData);
  }, []);

  return data;
};

const useFetch = (path) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(path)
      .then(res => res.json())
      .then(json => setData(json.data));
  }, []);

  return data;
};

export {
  useStorageListener,
  useFetch,
};