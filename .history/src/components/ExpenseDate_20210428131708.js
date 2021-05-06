import './ExpenseDate.css';

function ExpenseDate(props) {

    return (<div className="expense-date">
        <div className="expense-date__month">{props.date.getDate()}</div>
        <div>{props.date.getMonth()}</div>
        <div>{props.date.getFullYear()}</div>
    </div>);
}

export default ExpenseDate;