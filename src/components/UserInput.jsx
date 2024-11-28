export default function UserInput({onChangeInput, userInput}) {
    return (
        <>
            <section id="user-input">
                <div className="input-group">
                    <p>
                        <label>Initial Investment</label>
                        <input id="initialInvestment" type="number" required value={userInput.initialInvestment}
                               onChange={onChangeInput}/>
                    </p>
                    <p>
                        <label>Annual Investment</label>
                        <input id="annualInvestment" type="number" required value={userInput.annualInvestment}
                               onChange={onChangeInput}/>
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label>Expected Return</label>
                        <input id="expectedReturn" type="number" required value={userInput.expectedReturn}
                               onChange={onChangeInput}/>
                    </p>
                    <p>
                        <label>Duration</label>
                        <input id="duration" type="number" required value={userInput.duration}
                               onChange={onChangeInput}/>
                    </p>
                </div>
            </section>
        </>
    );
}
