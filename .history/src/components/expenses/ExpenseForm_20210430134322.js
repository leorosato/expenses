import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        title: '',
        amount: 0,
        date: ''
    });

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setAmout(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}
                    /></div >
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019 - 01 - 01' max='2022 - 12 - 31'
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