import React from "react";
import CatContext, { FactContext } from "./context/CatContext";
import Index1 from "./components/Index1";

const App = () => {
  return (
    <CatContext>
      <Index1 />
    </CatContext>
  );
};

export default App;
