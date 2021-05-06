import ExpenseForm from "./ExpenseForm"

import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        console.log(enteredExpenseData);
        props.onAddExpense(enteredExpenseData);
    }

    return (<div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} ></ExpenseForm>
    </div>);
}

export default NewExpense;