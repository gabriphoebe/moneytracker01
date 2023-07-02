import React, { useReducer, useState, useContext } from 'react';
import styles from '../styles.css';
import { entriesReducer, initialEntries, EntriesContext } from '../context/LedgerContext.js';

export default function LedgerAccount() {
    // const [initialEntries, dispatch] = useReducer(entriesReducer, initialEntries);
    const entries = useContext(EntriesContext);
    // const [transDateFrom, setTransDateFrom] = useState(new Date("1900-01-01"));
    // const [transDateTo, setTransDateTo] = useState(new Date("1900-01-01"));
    console.log(entries);
    const tableBody = entries.filter(entry => entry.id != 0).map(
        value => {
            <tr key={value.id}>
                <td>{value.transDate}</td>
                <td>{value.incomeExpense}</td>
                <td>{value.incExpType}</td>
                <td>{value.account}</td>
                <td>{value.amount}</td>
                <td>{value.remarks}</td>
            </tr>
        }
    );

    const ledgerEntry = ({id, transDate, incomeExpense, incExpType, account, amount, remarks}) => {
        <tr key={id}>
            <td>{transDate}</td>
            <td>{incomeExpense}</td>
            <td>{incExpType}</td>
            <td>{account}</td>
            <td>{amount}</td>
            <td>{remarks}</td>
        </tr>};
    console.log('le = ' + ledgerEntry);

    // entries.filter(entry => entry.id != 0).map(
    //         value => {
    //             console.log(value.id);
    //             console.log(value.transDate);
    //             console.log(value.incomeExpense);
    //             console.log(value.incExpType);
    //             console.log(value.account);
    //             console.log(value.amount);
    //             console.log(value.remarks);
    //         }
    //     ); 
    // console.log(tableBody);

    return (
        <div>
            {/* <div>
                <div className="field" id="transDateFrom">
                    <div className="fieldName">Date From</div>
                    <div className="inputValue">
                        <input type="date" name="transDateFrom" value={transDateFrom} 
                        onChange={(e) => {setTransDateFrom(e.target.value);}} >
                        </input>
                    </div>
                </div>
                <div className="field" id="transDateTo">
                    <div className="fieldName">To</div>
                    <div className="inputValue">
                        <input type="date" name="transDateTo" value={transDateTo} 
                        onChange={(e) => {setTransDateTo(e.target.value);}} >
                        </input>
                    </div>
                </div>
                <button onClick={
                    () => {
                        dispatch({
                            type: 'got_entries',
                            transDateFrom: transDateFrom, 
                            transDateTo: transDateTo,
                        });
                        console.log(entries);
                    }
                }>Search Records</button>
            </div> */}
            <table>
                <thead>
                    <th>Transaction Date</th>
                    <th>Income / Expenses</th>
                    <th>Income / Expenses Type</th>
                    <th>Account</th>
                    <th>Amount</th>
                    <th>Remarks</th>
                </thead>
                <tbody>
                    {/* {entries.filter(entry => entry.id != 0).map(ledgerEntry)} */}
                    <tr>
                        <td>a</td>
                        <td>b</td>
                        <td>c</td>
                        <td>d</td>
                        <td>e</td>
                        <td>f</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}