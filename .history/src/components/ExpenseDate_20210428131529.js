function ExpenseDate(props) {

    return (<div>
        <div>{props.date.getDate()}</div>
        <div>{props.date.getMonth()}</div>
        <div>{props.date.getFullYear()}</div>
    </div>);
}

export default ExpenseDate;