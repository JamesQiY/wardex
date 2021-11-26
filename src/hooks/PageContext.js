import { createContext, useEffect, useState } from 'react';
import enableDarkMode from './darkmode';
import axios from 'axios';

export const PageContext = createContext();

const PageProvider = (props) => {
  const [darkTheme, setDarkTheme] = enableDarkMode();
  const [players, setplayers] = useState([]);
  useEffect(() => {
    const url = "https://wardex.herokuapp.com/all";
    axios.get(url).then(
      res => {
        setplayers(res.data);
      }
    )
  }, []);

  return (
     // eslint-disable-next-line
    <PageContext.Provider value={{darkTheme, setDarkTheme, players}}>
      {props.children}
    </PageContext.Provider>
  );
}

export default PageProvider;