import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Results({userInput}) {

    const results = calculateInvestmentResults(userInput);

    return (
        <table id="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {
                results.map(result => (
                    <tr key={result.year}>
                        <td>{result.year}</td>
                        <td>{formatter.format(result.investmentValue)}</td>
                        <td>{formatter.format(result.interest)}</td>
                        <td>{formatter.format(result.totalInterest)}</td>
                        <td>{formatter.format(result.investmentCapital)}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
}
