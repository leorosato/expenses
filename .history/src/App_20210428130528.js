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
      <ExpenseItem  date={new Date('2021-03-15')} title="Acquisto TV" amount="100.5" />
      <ExpenseItem  date={new Date('2020-04-15')} title="Assicurazione auto" amount="345.32" />
      <ExpenseItem  date={new Date('2021-07-10')} title="Cellulare" amount="43.1" />
      <ExpenseItem  date={new Date('2021-01-4')} title="Lavastoviglie" amount="43" />
      <ExpenseItem  date={new Date('2020-09-07')} title="Computer" amount="998" />

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
