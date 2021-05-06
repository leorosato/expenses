import React from 'react';
import './ExpenseItem.css';

function ExpenseItem () {

    return (
        <div className="expense-item">
            <div>25/03/2020</div>
            <div>
                <h1>Acquisto TV</h1>
            </div>
            <div>500€</div>
        </div>);
}

export default ExpenseItem;