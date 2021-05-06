import React, { useState } from "react";
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const { date, amount } = props;
    const [titleState, setTitleState] = useState(props.title);

    const clickHandler = () => {
        console.log('click');

        setTitleState('titolo nuovo');
        console.log(titleState);
    }

    return (
        <Card className="expense-item">

            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{titleState}</h2>
            </div>
            <div className="expense-item__price">{amount} €</div>
            <button onClick={clickHandler}>modfica</button>
        </Card>);
}

export default ExpenseItem;