import React, { useState } from "react";
import "./PetForm.css";
import RangeInput from "./RangeInput";
import DogForm from "./AnimalForms/DogForm";

interface PetFormProps {
  dispatch: React.Dispatch<any>;
}

const PetForm: React.FC<PetFormProps> = ({ dispatch }) => {
  const [selectedType, setSelectedType] = useState<string>("");
  const [icon, setIcon] = useState<string>("");

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  return (
    <div className="petForm">
      <h3 className="form-title">
        Add new <span>Pet </span>
      </h3>
      <form>
        {selectedType && (
          <div className="form-group image">
            <img width="35%" src={`../../../images/${selectedType}.png`} />
          </div>
        )}
        <div className="form-group">
          <label className="name-label" htmlFor="name">
            Name:
          </label>
          <input className="input" type="text" name="name" id="name" required />
        </div>
        <div className="form-group">
          <RangeInput />
        </div>
        <div className="form-group">
          <label className="type-label" htmlFor="type">
            Animal Type:
          </label>
          <select
            className="type-select"
            name="type"
            id="type"
            required
            onChange={handleTypeChange}
          >
            <option value="">Select a type</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="horse">Horse</option>
            <option value="sheep">Sheep</option>
            <option value="chicken">Chicken</option>
            <option value="rabbit">Rabbit</option>
          </select>
        </div>{" "}
        {selectedType === "dog" && <DogForm dispatch={dispatch} />}
        <div className="submit-wrapper">
          <input className="submit-btn" type="submit" value="Add Pet" />
        </div>
        {/* {selectedType === "cat" && <CatForm />}
              {selectedType === "horse" && <HorseForm />}
              {selectedType === "sheep" && <SheepForm />}
              {selectedType === "chicken" && <ChickenForm />}
  {selectedType === "rabbit" && <RabbitForm />} */}
      </form>
    </div>
  );
};

export default PetForm;
