import React from 'react';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem (props) {

    console.log(props);
    const {date, title, amount} = props;
    
    return (
        <Card className="expense-item">
            <div className="expense-item">
                <ExpenseDate date={date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                </div>
                <div className="expense-item__price">{Math.round(amount)} €</div>
            </div>
        </Card>);
}

export default ExpenseItem;