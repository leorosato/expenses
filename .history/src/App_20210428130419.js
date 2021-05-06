import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenseDate = new Date('2021-03-15');
  const expenseTitle = 'Acquisto TV';
  const expenseAmount = 500.32;
  let categoria = "";
  return (
    <div className="App">
      <ExpenseItem  date={new Date('2021-03-15')} title="Acquisto TV" amount={expenseAmount} />
      <ExpenseItem  date={new Date('2020-04-15')} title="" amount={expenseAmount} />
      <ExpenseItem  date={new Date('2021-07-10')} title="" amount={expenseAmount} />
      <ExpenseItem  date={new Date('2021-01-4')} title="" amount={expenseAmount} />
      <ExpenseItem  date={new Date('2020-09-07')} title="" amount={expenseAmount} />

      <p>{categoria}</p>
    </div>
  );
}

/*
props: {
  date: new Date('2021-03-15'),
  title: 'Acquisto TV'
  amount: 500.32,
  categoria: 'casa'
}
*/

export default App;
