import React, { useState } from "react";
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const { date, amount } = props;
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        console.log('click');
        setTitle('titolo nuovo');
        console.log(title);
    }

    return (
        <Card className="expense-item">

            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
            </div>
            <div className="expense-item__price">{Math.round(amount)} €</div>
            <button onClick={clickHandler}>modfica</button>
        </Card>);
}

export default ExpenseItem;