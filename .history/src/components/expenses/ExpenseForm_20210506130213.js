import React, { useState, useRef } from "react";
import styles from './ExpenseForm.module.css';
var dateFormat = require("dateformat");

const ExpenseForm = (props) => {
    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: 0,
    //     date: new Date()
    // });

    const [isValid, setIsValid] = useState(true);

    const titleInputRef = useRef();
    const amountInputRef = useRef();
    const dateInputRef = useRef();

    // const titleChangeHandler = (event) => {
    //     setIsValid(event.target.value.length > 3);
    //     setUserInput((previousState) => {
    //         return {
    //             ...previousState,
    //             title: event.target.value
    //         }
    //     })
    // }
    // const amountChangeHandler = (event) => {
    //     setUserInput((previousState) => {
    //         return {
    //             ...previousState,
    //             amount: event.target.value
    //         }
    //     })
    // }

    // const dateChangeHandler = (event) => {
    //     setUserInput((previousState) => {
    //         return {
    //             ...previousState,
    //             date: new Date(event.target.value)
    //         }
    //     })
    // }

    const submitHandler = (event) => {
        event.preventDefault();
        // console.log(userInput);

        console.log('title:', titleInputRef.current.value);
        console.log('amount:', amountInputRef.current.value);
        console.log('date:', dateInputRef.current.value);
        //salvo l'expense
        // if (userInput.title.length <= 3) {
        //     setIsValid(false);
        //     return;
        // }
        props.onSaveExpenseData({
            id: props.currentId + 1,
            title: titleInputRef.current.value,
            amount: amountInputRef.current.value,
            date: new Date(dateInputRef.current.value)
            // ...userInput
        });
        // setUserInput(() => {
        //     return {
        //         title: '',
        //         amount: '',
        //         date: new Date()
        //     }
        // })
        titleInputRef.current.value = '';
        amountInputRef.current.value = '';
        dateInputRef.current.value = '';
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={styles.newExpenseControls}>
                <div className={styles['new-expense__control']}>
                    <label>Title</label>
                    <input
                        style={{ borderColor: !isValid ? 'red' : 'black' }}
                        type='text'
                        // value={userInput.title}
                        // onChange={titleChangeHandler}
                        ref={titleInputRef}
                    />
                </div>
                <div className={styles['new-expense__control']}>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        // value={userInput.amount}
                        ref={amountInputRef}
                    // onChange={amountChangeHandler}
                    />
                </div>
                <div className={styles['new-expense__control']}>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        // value={dateFormat(userInput.date, "yyyy-mm-dd")}
                        ref={dateInputRef}
                    //onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className={styles['new-expense__actions']}>
                <button type='submit'>Add Expense</button>
            </div>
        </form>);
}

export default ExpenseForm;