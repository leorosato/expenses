import React from 'react';
import './ExpenseItem.css';

function ExpenseItem () {

    const expenseDate = new Date(2020,02,15)
    

    return (<div className="expense-item">
                <div>25/03/2020</div>
                <div>
                    <h1>Acquisto TV</h1>
                </div>
                <div>500€</div>
            </div>);
}

export default ExpenseItem;