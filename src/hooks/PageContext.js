import { createContext, useEffect, useState } from 'react';
import enableDarkMode from './darkmode';
import axios from 'axios';

export const PageContext = createContext();

const PageProvider = (props) => {
  const [darkTheme, setDarkTheme] = enableDarkMode();
  const [players, setplayers] = useState([]);
  const [search, setsearch] = useState("");
  useEffect(() => {
    const url = "https://wardex.herokuapp.com/all";
    axios.get(url).then(
      res => {
        setplayers(res.data);
      }
    )
  }, []);

  const states = {darkTheme, setDarkTheme, players, search, setsearch}

  return (
    <PageContext.Provider value={states}>
      {props.children}
    </PageContext.Provider>
  );
}

export default PageProvider;