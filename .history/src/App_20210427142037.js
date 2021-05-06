import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenseDate = new Date('2020-03-15');
  const expenseTitle = 'Acquisto TV';
  const expenseAmount = 500;

  return (
    <div className="App123">
      <ExpenseItem date={expenseDate} title={expenseTitle} amount={expenseAmount} />
    </div>
  );
}

export default App;