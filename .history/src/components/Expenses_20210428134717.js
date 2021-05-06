import ExpenseItem from './ExpenseItem.js';

function Expenses(props) {

    return ( 
        <div>
       <ExpenseItem 
       date={props.expenses[0].date} title="Acquisto TV" amount="100.5" />
    <ExpenseItem date={new Date('2020-04-15')} title="Assicurazione auto" amount="345.32" />
    <ExpenseItem date={new Date('2021-07-10')} title="Cellulare" amount="43.1" />
    <ExpenseItem date={new Date('2021-01-4')} title="Lavastoviglie" amount="43" />
    <ExpenseItem date={new Date('2020-09-07')} title="Computer" amount="998" />
    </div>);
}

export default Expenses;