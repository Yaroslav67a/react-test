import React, { useState } from "react";
import { TEInput, TETextarea } from "tw-elements-react";

const DiscountCodeEntry: React.FC = () => {
  const [discountCode, setDiscountCode] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleDiscountCodeChange = (event: any) => {
    const { value } = event.target;
    setDiscountCode(value);
    setIsValid(value.match(/^DISCOUNT\d{4}$/) !== null);
  };

  return (
    <div>
      <div className="relative mb-3 w-4/5	">
        <h1 className="text-5xl font-medium leading-tight">
          Put your code here
        </h1>

        <TETextarea
          id="discountCode"
          className="w-4/5"
          value={discountCode}
          size="large"
          onChange={handleDiscountCodeChange}
          rows={4}
        ></TETextarea>
      </div>

      {!isValid && (
        <p className="text-red-500">
          Invalid discount code format. Please enter a code like "DISCOUNT2024".
        </p>
      )}
    </div>
  );
};

export default DiscountCodeEntry;
