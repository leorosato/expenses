import ExpenseItem from './ExpenseItem.js';
import './Expenses.css';

function Expenses(props) {

    let expensesContent = <p>nessuna spesa</p>;

    if (props.expenses.length > 0) {
        expensesContent = props.expenses.map((item) => (
            < ExpenseItem
                key={item.id}
                date={item.date}
                title={item.title}
                amount={item.amount}
            />
        ))
    }
    return (
        <div className="expenses">
            {expensesContent}
        </div>);
}

export default Expenses;