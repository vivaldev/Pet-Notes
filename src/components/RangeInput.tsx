import React, { useState } from "react";

const RangeInput: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
  };

  return (
    <>
      <label className="age" htmlFor="age">
        Age: {value}
      </label>
      <input
        className="age-input"
        type="range"
        name="age"
        id="age"
        min="0"
        max="25"
        required
        onChange={handleChange}
      />
    </>
  );
};

export default RangeInput;
