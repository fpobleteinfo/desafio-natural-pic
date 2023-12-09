import { createContext, useState, useEffect } from "react";
export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
const [data, setData] = useState([]);

const url = "photos.json"

const apiData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Ha habido un error en la API");
    }
    const info = await response.json();
    setData(info.photos); //estoy dentro del array photos...

  } catch (error) {
    console.error({ message: error });
  }
};

useEffect(() => {
  apiData();
}, []);

    return ( 

    <ApiContext.Provider value={{ data, setData }}>
      {children}
    </ApiContext.Provider>
  );
};
export default ApiProvider;
