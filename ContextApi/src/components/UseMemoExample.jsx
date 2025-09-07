import React, { useState, useMemo } from "react";

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  // useMemo ka use karte hain taaki expensive calculation ko unnecessary baar-baar na karein.
  // Yeh sirf tab recalculate karega jab `count` change hoga.
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    let result = 0;
    // Yeh loop ek heavy operation simulate kar raha hai.
    for (let i = 0; i < 1000000000; i++) {
      result += count;
    }
    return result;
  }, [count]); // Dependency array mein `count` diya gaya hai.

  return (
    <div>
      <h1>useMemo Hook Example</h1>
      <p>Count: {count}</p>
      <p>Other Count: {otherCount}</p>
      <p>Expensive Calculation Result: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherCount(otherCount + 1)}>
        Increment Other Count
      </button>
    </div>
  );
};

export default UseMemoExample;
