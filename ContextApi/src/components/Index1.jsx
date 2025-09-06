import React, { useContext } from "react";
import { FactContext } from "../context/CatContext";

const Index1 = () => {
  const factFunction = useContext(FactContext);
  const data = factFunction();

  return <div>hello {data.fact}</div>;
};

export default Index1;
