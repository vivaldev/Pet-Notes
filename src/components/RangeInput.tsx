import React, { useState } from "react";

const RangeInput: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
  };

  return (
    <>
      <label className="age-label" htmlFor="age">
        Age: <span className="age-value">{value}</span>
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
