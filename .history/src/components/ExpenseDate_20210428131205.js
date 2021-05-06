function ExpenseDate(props) {

    return (<div>
        <div>{props.date.getDay()}</div>
        <div>{props.date.getMonth()}</div>
        <div>{props.date.getYear()}</div>
    </div>);
}
//{props.date.toISOString()}</div>
export default ExpenseDate;