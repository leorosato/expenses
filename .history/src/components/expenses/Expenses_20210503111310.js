import ExpenseItem from './ExpenseItem.js';
import './Expenses.css';

function Expenses(props) {

    return (

        <div className="expenses">
            {
                props.expenses.length === 0 ?
                    (<p>nessuna spesa</p>) : (

                        props.expenses.length > 20 = (<p>troppi</p>) : (
                        props.expenses.map((item) => (
            < ExpenseItem
                key={item.id}
                date={item.date}
                title={item.title}
                amount={item.amount}
            />
                ))
                ))
            }

        </div>);
}

export default Expenses;