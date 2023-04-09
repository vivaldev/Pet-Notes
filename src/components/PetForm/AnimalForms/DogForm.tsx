import React from "react";
import "./../PetForm.css";

interface DogFormProps {
  dispatch: React.Dispatch<any>;
}

const DogForm: React.FC<DogFormProps> = ({ dispatch }) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle image change logic here
  };

  return (
    <>
      <div className="form-group">
        <label className="breed-label" htmlFor="breed">
          Breed:
        </label>
        <input className="input" type="text" name="breed" id="breed" required />
      </div>

      <div className="custom-file-input">
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        <label className="file-input-trigger" htmlFor="image">
          Image:
        </label>
      </div>
    </>
  );
};

export default DogForm;
