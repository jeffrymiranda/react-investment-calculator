import {calculateInvestmentResults} from "../util/investment.js";
import {useState} from "react";
import Result from "./Result.jsx";

const INITIAL_STATE = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 10,
}

export default function UserInput() {

    const [inputData, setInputData] = useState(INITIAL_STATE);
    const [result, setResult] = useState([]);

    function handleChange(event) {
        const {id: key, value} = event.target;
        setInputData(prevInputData => {
            const updatedData = {
                ...prevInputData,
                [key]: Number(value) || 0, // Ensure value is a valid number or default to 0
            };
            setResult(calculateInvestmentResults(updatedData)); // Update results with the new input data
            return updatedData; // Return the updated data for state
        });
    }

    return (
        <>
            <section id="user-input">
                <div className="input-group">
                    <p>
                        <label>Initial Investment</label>
                        <input id="initialInvestment" type="number" required value={inputData.initialInvestment}
                               onChange={handleChange}/>
                    </p>
                    <p>
                        <label>Annual Investment</label>
                        <input id="annualInvestment" type="number" required value={inputData.annualInvestment}
                               onChange={handleChange}/>
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label>Expected Return</label>
                        <input id="expectedReturn" type="number" required value={inputData.expectedReturn}
                               onChange={handleChange}/>
                    </p>
                    <p>
                        <label>Duration</label>
                        <input id="duration" type="number" required value={inputData.duration} onChange={handleChange}/>
                    </p>
                </div>
            </section>
            <Result result={result}/>
        </>
    );
}
