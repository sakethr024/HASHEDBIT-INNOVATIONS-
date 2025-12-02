import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleCalculation = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) return;

    switch (operation) {
      case "add":
        setResult(n1 + n2);
        break;
      case "subtract":
        setResult(n1 - n2);
        break;
      case "multiply":
        setResult(n1 * n2);
        break;
      case "divide":
        setResult(n2 !== 0 ? n1 / n2 : "Cannot divide by zero");
        break;
      default:
        setResult(null);
    }
  };

  return (
    <div className="p-5 max-w-sm mx-auto bg-gray-100 rounded-lg shadow-md">
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        className="block w-full mb-2 p-2 border rounded"
        placeholder="Enter second number"
      />
      <div className="flex gap-2 my-2">
        <button
          onClick={() => handleCalculation("add")}
          className="p-2 bg-blue-500 text-white rounded"
        >
          +
        </button>
        <button
          onClick={() => handleCalculation("subtract")}
          className="p-2 bg-red-500 text-white rounded"
        >
          -
        </button>
        <button
          onClick={() => handleCalculation("multiply")}
          className="p-2 bg-green-500 text-white rounded"
        >
          *
        </button>
        <button
          onClick={() => handleCalculation("divide")}
          className="p-2 bg-yellow-500 text-white rounded"
        >
          /
        </button>
      </div>
      {result !== null && (
        <div className="p-2 mt-3 bg-white border rounded text-center">
          Result: {result}
        </div>
      )}
    </div>
  );
}
