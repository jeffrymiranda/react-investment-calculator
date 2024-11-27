import {calculateInvestmentResults} from "../util/investment.js";
import {useState} from "react";
import Result from "./Result.jsx";

export default function UserInput() {

    const [initialInvestment, setInitialInvestment] = useState(0);
    const [result, setResult] = useState([]);

    function handleChange(event) {
        const intInv = event.target.value;
        setInitialInvestment(intInv);
        console.log('Initial Investment: ', intInv);
        setResult(calculateInvestmentResults({
            initialInvestment: Number(intInv),
            annualInvestment: 1200,
            expectedReturn: 6,
            duration: 10
        }))
        console.log('Annual Data: ', result);
    }

    return (
        <>
            <section id="user-input">
                <div className="input-group">
                    <p>
                        <label>Initial Investment</label>
                        <input type="number" required value={initialInvestment} onChange={handleChange}/>
                    </p>
                    <p>
                        <label>Annual Investment</label>
                        <input type="number" required/>
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label>Expected Return</label>
                        <input type="number" required/>
                    </p>
                    <p>
                        <label>Duration</label>
                        <input type="number" required/>
                    </p>
                </div>
            </section>
            <Result result={result}/>
        </>
    );
}
