import React, { useState } from "react";
import "./../PetForm.css";

interface DogFormProps {
  dispatch: React.Dispatch<any>;
}

const DogForm: React.FC<DogFormProps> = ({ dispatch }) => {
  const [image, setImage] = useState<string>("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result as string);
      };
    }
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

        {image && (
          <div className="selected-image">
            <img width="50%" src={image} alt="Selected image" />
          </div>
        )}
      </div>
    </>
  );
};

export default DogForm;
