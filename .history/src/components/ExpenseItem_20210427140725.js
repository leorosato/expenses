import React from 'react';
import './ExpenseItem.css';

function ExpenseItem () {

    const expenseDate = new Date('2020-03-15');
    const expenseTitle = 'Acquisto TV';
    const expenseAmount = 500;

    return (<div className="expense-item">
                <div>{expenseDate.toISOString()}</div>
                <div className="expense-item__description">
                    <h1>{expenseTitle}</h1>
                </div>
                <div>{expenseAmount} €</div>
            </div>);
}

export default ExpenseItem;