import React, { useContext } from 'react'

// Import the Global State
import { GlobalContext } from '../context/GlobalState';

export const AccountSummary = () => {

    const { transactions } = useContext(GlobalContext);

    const transactionAmounts = transactions.map(transactions => transactions.transactionAmount);

    const income = transactionAmounts
        .filter(transactions => transactions > 0)
        .reduce((acc, transactions) => (acc += transactions), 0)
        .toFixed(2);

    const expense = Math.abs(transactionAmounts
        .filter(transactions => transactions < 0)
        .reduce((acc, transactions) => (acc += transactions), 0)
        ).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">
                    {income}
                </p>
            </div>
            <div>
                <h4>Expense</h4> 
                <p className="money minus">
                    {expense}
                </p>
            </div>
            
        </div>
    )
}