import React, { Component } from 'react';
import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/expenses/NewExpense';

/*
const EXP_INITIAL = [
  {
    id: 'e1',
    title: 'Acquisto TV',
    amount: 394.12,
    date: new Date('2020-07-14'),
  },
  { id: 'e2', title: 'Cellulare', amount: 799.49, date: new Date('2021-02-12') },
  {
    id: 'e3',
    title: 'Assicurazione auto',
    amount: 294.67,
    date: new Date('2021-02-28'),
  },
  {
    id: 'e4',
    title: 'Lavastoviglie',
    amount: 450,
    date: new Date('2021-05-12'),
  },
  {
    id: 'e5',
    title: 'Computer',
    amount: 850,
    date: new Date('2021-05-12'),
  },
];
*/

const EXP_INITIAL = [];

class App extends Component {

  const[expenses, setExpenses] = useState(EXP_INITIAL);

  const addExpenseHandler = (expense) => {
    setExpenses((prev) => [...prev, expense]
    )
  }

  return(
    <div className = "App" >
      <NewExpense currentId={expenses.length} onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
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
