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

  console.log(data);

  return data;
};

const useFetch = (path, processData) => {
  useEffect(() => {
    fetch(path)
      .then(res => res.json())
      .then(processData);
  }, []);
};

export {
  useStorageListener,
  useFetch,
};