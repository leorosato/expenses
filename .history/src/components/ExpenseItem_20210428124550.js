import React from 'react';
import './ExpenseItem.css';

function ExpenseItem (props) {

    console.log(props);
    return (<div className="expense-item">
                <div>{props.date.toISOString()}</div>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                </div>
                <div className="expense-item__price">{Math.round(props.amount + 1)} €</div>
            </div>);
}

export default ExpenseItem;