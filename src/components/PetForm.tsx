import React, { useState } from "react";
import "../styles/PetForm.css";

interface PetFormProps {
  dispatch: React.Dispatch<any>;
}

const PetForm: React.FC<PetFormProps> = ({ dispatch }) => {
  const [selectedType, setSelectedType] = useState<string>("");
  return (
    <div className="petForm">
      <h3 className="form-title">Add new Pet</h3>
      <form>
        <div className="form-group">
          <label className="name-label" htmlFor="name">
            Name
          </label>
          <input className="name-input" type="text" name="name" id="name" />
        </div>
        <div className="form-group">
          <label className="type-label" htmlFor="type">
            Type
          </label>
          <select onInput={} className="type-select" name="type" id="type">
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="horse">Horse</option>
            <option value="sheep">Sheep</option>
            <option value="chicken">Chicken</option>
            <option value="rabbit">Rabbit</option>
          </select>
              </div>
              {selectedType === "dog" && <DogForm />}
              {selectedType === "cat" && <CatForm />}
              {selectedType === "horse" && <HorseForm />}
              {selectedType === "sheep" && <SheepForm />}
              {selectedType === "chicken" && <ChickenForm />}
              {selectedType === "rabbit" && <RabbitForm />}
            </div>
      </form>
    </div>
  );
};

export default PetForm;
