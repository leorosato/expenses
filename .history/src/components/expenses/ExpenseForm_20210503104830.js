import React, { useState } from "react";
import './ExpenseForm.css';
var dateFormat = require("dateformat");

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        title: '',
        amount: 0,
        date: new Date()
    });

    const titleChangeHandler = (event) => {
        setUserInput((previousState) => {
            return {
                ...previousState,
                title: event.target.value
            }
        })
    }
    const amountChangeHandler = (event) => {
        setUserInput((previousState) => {
            return {
                ...previousState,
                amount: event.target.value
            }
        })
    }

    const dateChangeHandler = (event) => {
        setUserInput((previousState) => {
            return {
                ...previousState,
                date: new Date(event.target.value)
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(userInput);
        //salvo l'expense

        props.onSaveExpenseData({
            id: Math.random().toString,
            ...userInput
        });
        setUserInput(() => {
            return {
                title: '',
                amount: '',
                date: new Date()
            }
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={userInput.title}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={userInput.amount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        value={dateFormat(userInput.date, "yyyy-mm-dd")}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>);
}

export default ExpenseForm;