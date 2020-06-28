import React,{useContext} from 'react'

// Import the Global State
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transactions }) => {

    const { delTransaction } = useContext(GlobalContext);

    const sign = transactions.transactionAmount > 0 ? '+' : '-';
    const transactionType = transactions.transactionAmount > 0 ? 'plus' : 'minus';

        return (
            <li className={transactionType}>
                {transactions.description}
                <span>{sign}${Math.abs(transactions.transactionAmount)}</span>
                <button className="delete-btn"
                        onClick={() => delTransaction(transactions.id)}>
                    X
                </button>
            </li>
    )
}
export default Transaction;