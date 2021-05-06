import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const { date, amount } = props;

    const clickHandler = () => {
        console.log('click');
        props.title = 'titolo nuovo';
    }

    return (
        <Card className="expense-item">

            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">{Math.round(amount)} €</div>
            <button onClick={clickHandler}>modfica</button>
        </Card>);
}

export default ExpenseItem;