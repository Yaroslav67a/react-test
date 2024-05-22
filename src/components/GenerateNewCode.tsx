import React, { useState } from "react";
import { TERipple } from "tw-elements-react";

const DiscountCodeGenerator: React.FC = () => {
  const [generatedCode, setGeneratedCode] = useState<string>("");

  const generateDiscountCode = () => {
    // Generate a mock discount code (e.g., "NEWCODE123")
    const newCode = "NEWCODE" + Math.floor(Math.random() * 10000);
    setGeneratedCode(newCode);
  };

  return (
    <div>
      <h1 className="text-5xl font-medium leading-tight">
        Generate new one code
      </h1>
      <button
        type="button"
        onClick={generateDiscountCode}
        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      >
        Generate Discount Code
      </button>

      {generatedCode && (
        <p className="mt-2">Generated Discount Code: {generatedCode}</p>
      )}
    </div>
  );
};

export default DiscountCodeGenerator;
