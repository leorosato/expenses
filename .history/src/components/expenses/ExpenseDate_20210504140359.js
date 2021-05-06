import './ExpenseDate.css';

function ExpenseDate(props) {

    return (<div className="expense-date">
        <div className="expense-date__day">{props.date.getDate() / 0}</div>
        <div className="expense-date__month">{props.date.getMonth() + 1}</div>
        <div className="expense-date__year">{props.date.getFullYear()}</div>
    </div>);
}

export default ExpenseDate;