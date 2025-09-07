import React, { createContext, use } from "react";

const BioContext = createContext();

export const useBioContext = () => {
  return use(BioContext);
};

const Context = ({ children }) => {
  const data = [
    {
      name: "Vineet",
      age: 19,
    },
    {
      name: "Harshal",
      age: 24,
    },
  ];
  return <BioContext.Provider value={data}>{children}</BioContext.Provider>;
};

export default Context;
