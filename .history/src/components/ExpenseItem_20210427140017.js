import React from 'react';
import './ExpenseItem.css';

function ExpenseItem () {

    const expenseDate = new Date(2020,02,15);
    const expenseTitle = 'Acquisto TV';
    const expenseAmount = 500;

    return (<div className="expense-item">
                <div>{expenseDate}</div>
                <div>
                    <h1>{expenseTitle}</h1>
                </div>
                <div>{expenseAmount}€</div>
            </div>);
}

export default ExpenseItem;