import {formatter} from "../util/investment.js";

export default function Result({result}) {
    //console.log('Result: ', result);
    return (
        <table id="result">
            <thead>
            <tr>
                <td>Year</td>
                <td>Investment Value</td>
                <td>Interest (Year)</td>
                <td>Total Interest</td>
                <td>Invested Capital</td>
            </tr>
            </thead>
            <tbody>
            {
                result.map((item, index) => (
                    <tr key={index}>
                        <td>{item.year}</td>
                        <td>{formatter.format(item.investmentValue)}</td>
                        <td>{formatter.format(item.interest)}</td>
                        <td>{formatter.format(item.totalInterest)}</td>
                        <td>{formatter.format(item.investmentCapital)}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
}
