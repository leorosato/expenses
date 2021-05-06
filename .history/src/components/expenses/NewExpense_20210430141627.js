import ExpenseForm from "./ExpenseForm"

const saveExpenseDataHandler = (enteredExpenseData) => {

}


const NewExpense = (props) => {
    return (<div>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} ></ExpenseForm>

    </div>);
}

export default NewExpense;