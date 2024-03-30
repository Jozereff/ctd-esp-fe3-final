import { createContext, useState } from "react";

export const initialState = {theme: "", data: []}



export const ContextGlobal = createContext({
  themeDark: '',
  setThemeDark: () => {}
});
 
export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [themeDark, setThemeDark] = useState(true);


  const value = {
    themeDark,
    setThemeDark
  }

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};
