import React, { useReducer, useState, useContext } from 'react';
import styles from '../styles.css';
import { EntriesDispatchContext, EntriesContext, entriesReducer, initialEntries } from '../context/LedgerContext.js';

export default function LedgerInput() {

    // const [entries, dispatch] = useReducer(entriesReducer, initialEntries);
    const entries = useContext(EntriesContext);
    const dispatch = useContext(EntriesDispatchContext);

    // const userId = useContext(UserContext);
    // const entries = useContext(EntriesContext);
    // let nextId = entries.length;
    const [incExpValue, setIncExpValue] = useState('expense');
    const [incExpType, setIncExpType] = useState('foodBev');
    const [account, setAccount] = useState('payme');
    const [amount, setAmount] = useState(0);
    const [remarks, setRemarks] = useState('');
    
    var curr = new Date();
    const [transDate, setTransDate] = useState(curr);

    function handleChange(event) {
        const nextValue = event.target.value;
        if(event.target.name === 'transDate') {
            setTransDate(nextValue);
        } else if(event.target.name === 'incomeExpense') {
            setIncExpValue(nextValue);
        } else if(event.target.name === 'incExpType') {
            setIncExpType(nextValue);
        } else if(event.target.name === 'account') {
            setAccount(nextValue);
        } else if(event.target.name === 'amount') {
            if(nextValue.match(/\./g)){
                const [, decimal] = nextValue.split('.');
                if(decimal?.length > 2) {
                    return;
                }
            }
            setAmount(nextValue);
        } else if(event.target.name === 'remarks') {
            const strArr = nextValue.split('');
            if(strArr.length >= 200) {
                console.log(strArr.length);
                const str = strArr.slice(0,200).join('');
                setRemarks(str);
                return;
            }
            setRemarks(nextValue);
        }

    }


    let nextId = entries.length;
    let userId = 1;

    return(
        <div>
            <div className="field" id="transDate">
                <div className="fieldName required">Transaction Date</div>
                <div className="inputValue">
                    <input type="date" name="transDate" value={transDate} onChange={handleChange} ></input>
                </div>
            </div>
            <div className="field" id="incomeExpense">
                <div className="fieldName required">Income / Expense</div>
                <div className="inputValue">
                    <select name="incomeExpense" value={incExpValue} onChange={handleChange}>
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                </div>
            </div>
            <div className="field" id="incExpType">
                <div className="fieldName required">Income / Expense Type</div>
                <div className="inputValue">
                    <select name="incExpType" value={incExpType} onChange={handleChange}>
                        <option value="adjustment">Adjustment</option>
                        <option value="bankTransfer">Bank Transfer</option>
                        <option value="cashWithdraw">Cash Withdrawal</option>
                        <option value="donation">Donation</option>
                        <option value="foodBev">Food & Beverage</option>
                        <option value="groceries"s>Groceries</option>
                        <option value="learning">Learning</option>
                        <option value="openBal">Opening Balance</option>
                        <option value="octopusTopUp">Octopus Top Up</option>
                        <option value="others">Others</option>
                        <option value="paymeTopUp">Payme Top Up</option>
                        <option value="subscription">Subscription</option>
                        <option value="tngTopUp">Tap & Go Top Up</option>
                        <option value="transportation">Transportation</option>
                    </select>
                </div>
            </div>
            <div className="field" id="account">
                <div className="fieldName required">Account</div>
                <div className="inputValue">
                    <select name="account" value={account} onChange={handleChange}>
                        <option value="cash">Cash</option>
                        <option value="ccbCreditCard">CCB Credit Card</option>
                        <option value="hsbcAccount">HSBC Account</option>
                        <option value="hsbcCreditCard">HSBC Credit Card</option>
                        <option value="octopus">Octopus</option>
                        <option value="payme">Payme</option>
                        <option value="tng">Tap & Go</option>
                    </select>
                </div>
            </div>
            <div className="field" id="amount">
                <div className="fieldName required">Amount (HKD)</div>
                <div className="inputValue">
                    <input type="number" step=".01" name="amount" value={amount} onChange={handleChange} ></input>
                </div>
            </div>
            <div className="field" id="remarks">
                <div className="fieldName">Remarks</div>
                <div className="inputValue">
                    <input type="text" name="remarks" value={remarks} onChange={handleChange} ></input>
                </div>
            </div>
            <button name="Submit" onClick={
                () => {
                    let createdDateTime = Date.now();
                    dispatch({
                        type: 'added_entry',
                        id: nextId, 
                        userId: userId, 
                        transDate: transDate, 
                        incomeExpense: incExpValue, 
                        incExpType: incExpType, 
                        account: account, 
                        amount: amount, 
                        remarks: remarks, 
                        createdDateTime: createdDateTime,
                    });
                    
                }
            }>Submit</button>
        </div>

    );

}