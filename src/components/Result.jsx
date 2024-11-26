import {formatter} from "../util/investment.js";

export default function Result() {
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
            <tr>
                <td>1</td>
                <td>{formatter.format(17100)}</td>
                <td>{formatter.format(900)}</td>
                <td>{formatter.format(900)}</td>
                <td>{formatter.format(16200)}</td>
            </tr>
            </tbody>
        </table>
    );
}
