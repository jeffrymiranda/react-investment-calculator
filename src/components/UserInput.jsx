import {calculateInvestmentResults} from "../util/investment.js";

export default function UserInput() {

    const annualData = calculateInvestmentResults({
        initialInvestment: 15000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })
    console.log('Annual Data: ', annualData);

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required/>
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
    );
}
