import React, { useState } from "react";
import styles from './ExpenseForm.module.css';
var dateFormat = require("dateformat");

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        title: '',
        amount: 0,
        date: new Date()
    });

    const [isValid, setIsValid] = useState(true);

    const titleChangeHandler = (event) => {
        setIsValid(event.target.value.length > 3);
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
        if (userInput.title.length <= 3) {
            setIsValid(false);
            return;
        }
        props.onSaveExpenseData({
            id: props.currentId + 1,
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
            <div className={styles.newExpenseControls}>
                <div className={styles.newExpenseControl}>
                    <label>Title</label>
                    <input
                        style={{ borderColor: !isValid ? 'red' : 'black' }}
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