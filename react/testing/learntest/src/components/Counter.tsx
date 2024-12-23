import React, { useState } from "react";

const Counter = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialValue);

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4" data-testid="counter-value">
        Count: {count}
      </h2>
      <div className="space-x-2">
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded"
          data-testid="increment-button"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded"
          data-testid="decrement-button"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 text-white px-4 py-2 rounded"
          data-testid="reset-button"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
