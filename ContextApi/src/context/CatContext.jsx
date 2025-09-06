import React, { Children, createContext, useState } from "react";
export const FactContext = createContext();

const CatContext = ({ children }) => {
  const url = "https://catfact.ninja/fact";

  const factFunction = () => {
    fetch(url).then((res) => {
      res.json().then((data) => {
        return data;
      });
    });
  };

  return (
    <FactContext.Provider value={factFunction}>{children}</FactContext.Provider>
  );
};

export default CatContext;
