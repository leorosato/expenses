import ExpenseForm from "./ExpenseForm"

import './NewExpense.css';

const saveExpenseDataHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData);
    props.onAddExpense(enteredExpenseData);
}


const NewExpense = (props) => {
    return (<div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} ></ExpenseForm>
    </div>);
}

export default NewExpense;