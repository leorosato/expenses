import ExpenseItem from './ExpenseItem.js';
import './Expenses.css';

function Expenses(props) {

    return (

        <div className="expenses">
            {
                props.expenses.map((item) => ({
                    < ExpenseItem
                        date = { item.date }
                        title = { item.title }
                        amount = { item.amount }
                    />
                }))
            }

        </div>);
}

export default Expenses;