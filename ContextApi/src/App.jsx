import React from "react";
import Context from "./Context/Context";
import Expample1 from "./Context/Expample1";
import Example2 from "./Context/Example2";

const App = () => {
  return (
    <div>
      <Context>
        <Expample1 />
        <Example2 />
      </Context>
    </div>
  );
};

export default App;
