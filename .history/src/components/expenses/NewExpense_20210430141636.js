import ExpenseForm from "./ExpenseForm"

const saveExpenseDataHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData);
}


const NewExpense = (props) => {
    return (<div>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} ></ExpenseForm>

    </div>);
}

export default NewExpense;