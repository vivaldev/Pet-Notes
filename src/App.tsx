import React, { useReducer } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import PetForm from "./components/PetForm/PetForm";
import { petData } from "./data/petData";

interface Pet {
  id: number;
  name: string;
  type: string;
  breed: string;
  age: number;
  image: string;
  description: string;
}

const petReducer = (state: Pet[], action: any) => {
  switch (action.type) {
    case "add_pet":
      return [...state, action.payload];
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [petDataState, dispatch] = useReducer(petReducer, petData);
  return (
    <div className="App">
      <Header />
      <PetForm dispatch={dispatch} />
    </div>
  );
};

export default App;
