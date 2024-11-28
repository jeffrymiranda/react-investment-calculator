import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import {useState} from "react";
import Results from "./components/Results.jsx";

const INITIAL_STATE = {
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
}

function App() {

    const [inputData, setInputData] = useState(INITIAL_STATE);

    const inputIsValid = inputData.duration > 0;

    function handleChangeInput(event) {
        const {id: key, value} = event.target;
        setInputData(prevInputData => {
            return {
                ...prevInputData,
                [key]: Number(value) || 0, // Ensure value is a valid number or default to 0
            };
        });
    }

    return (
        <>
            <Header/>
            <UserInput onChangeInput={handleChangeInput} userInput={inputData}/>
            {!inputIsValid && <p className="center">Please enter a duration value greater than zero.</p>}
            {inputIsValid && <Results userInput={inputData}/>}
        </>
    )
}

export default App
