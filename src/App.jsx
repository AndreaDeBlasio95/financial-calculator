import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        // Spread the previous input state
        ...prevInput,
        // Update the changed input - only the changed input will be updated
        [inputIdentifier]: +newValue, // Convert to number
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p>Duration must be greater than 0</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
