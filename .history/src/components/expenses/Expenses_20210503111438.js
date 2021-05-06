import ExpenseItem from './ExpenseItem.js';
import './Expenses.css';

function Expenses(props) {

    let expensesContent = <p>nessuna spesa</p>;

    if (props.expenses.length > 0) {
        props.expenses.map((item) => (
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
            {
                props.expenses.length === 0 ?
                    (): (
                        props.expenses.map((item) => (
            < ExpenseItem
                key={item.id}
                date={item.date}
                title={item.title}
                amount={item.amount}
            />
                        ))
                    )
            }

        </div>);
}

export default Expenses;