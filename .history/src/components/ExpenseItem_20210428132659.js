import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem (props) {

    console.log(props);
    
    return (<div className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                </div>
                <div className="expense-item__price">{Math.round(props.amount)} €</div>
            </div>);
}

export default ExpenseItem;