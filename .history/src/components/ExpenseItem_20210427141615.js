import React from 'react';
import './ExpenseItem.css';

function ExpenseItem (props) {

    const expenseDate = new Date('2020-03-15');
    const expenseTitle = 'Acquisto TV';
    const expenseAmount = 500;

    return (<div className="expense-item">
                <div>{props.expenseDate.toISOString()}</div>
                <div className="expense-item__description">
                    <h2>{props.expenseTitle}</h2>
                </div>
                <div className="expense-item__price">{props.expenseAmount} €</div>
            </div>);
}

export default ExpenseItem;