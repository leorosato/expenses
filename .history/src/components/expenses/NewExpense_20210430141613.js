import ExpenseForm from "./ExpenseForm"

const saveExpenseDataHandler = () => {

}


const NewExpense = (props) => {
    return (<div>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} ></ExpenseForm>

    </div>);
}

export default NewExpense;