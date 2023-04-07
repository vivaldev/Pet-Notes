import React from "react";
import "./../PetForm.css";

const DogForm: React.FC = () => {
  return (
    <>
      <div className="form-group">
        <label className="breed-label" htmlFor="breed">
          Breed:
        </label>
        <input
          className="breed-input"
          type="text"
          name="breed"
          id="breed"
          required
        />
      </div>
    </>
  );
};

export default DogForm;
