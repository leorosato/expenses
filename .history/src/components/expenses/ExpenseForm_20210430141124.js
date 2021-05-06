import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        title: '',
        amount: 0,
        date: ''
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
                date: event.target.value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(userInput);
        //salvo l'expense
        setUserInput(() => {
            return {
                title: '',
                amount: '',
                date: ''
            }
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={userInput.title} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={userInput.amount} min='0.01' step='0.01' onChange={amountChangeHandler}
                    /></div >
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={userInput.date} min='2019 - 01 - 01' max='2022 - 12 - 31'
                        onChange={dateChangeHandler}
                    />
                </div >
            </div >
            <div className='new-expense__actions'>
                < button type='submit'> Add Expense</button >
            </div >
        </form >);
}

export default ExpenseForm;