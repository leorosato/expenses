import ExpenseItem from './ExpenseItem.js';
import './Expenses.css';

function Expenses(props) {

    const noExpenses = <p>nessuna spesa</p>;

    if (props.expenses.length > 0) {
        expensesContent = props.expenses.map((item) => (
            < ExpenseItem
                key={item.id}
                date={item.date}
                title={item.title}
                amount={item.amount}
            />
        ))
    } else {
        expensesContent = noExpenses;
    }
    return (

        <div className="expenses">
            {expensesContent}

        </div>);
}

export default Expenses;