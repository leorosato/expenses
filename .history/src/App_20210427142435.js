import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenseDate = new Date('2021-03-15');
  const expenseTitle = 'Acquisto TV';
  const expenseAmount = 500.32;

  return (
    <div className="App123">
      <ExpenseItem categoria="casa" date={expenseDate} title={expenseTitle} amount={expenseAmount} />
    </div>
  );
}

/*
props: {
  date: ...,
  title: ...,
  amount: ...
  categoria: 'casa'
}
*/

export default App;
