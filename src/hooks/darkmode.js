import { useEffect, useState } from "react";

// to store a local key-value pair
const UseLocalStorage = (key, value) => {
  const [storedValue, setStoredValue] = useState(() => {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : value;
  });
  const setValue = (value) => {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
}

const EnableDarkMode = () => {
  const [enabled, setEnabled] = UseLocalStorage('dark-theme', true);

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;
    enabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [enabled]);

  return [enabled, setEnabled];
}

export default EnableDarkMode;