import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/expenses/NewExpense';
var dateFormat = require("dateformat");


const INITIAL_EXPENSES_LIST = [
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

function App() {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES_LIST);

   const  addExpenseHandler  = async (expense) => {
    const response = await fetch('https://adm2021.azurewebsites.net/api/expenses', {
      method: 'POST',
      body: JSON.stringify({
        title: expense.title,
        amount: expense.amount,
        date: dateFormat(expense.date, "yyyy-mm-dd")
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();


    setExpenses((prev) => {
      return [
        ...prev,
        data
      ]
    })
  }

  async function fetchExpensesHandler() {
    const response = await fetch('https://adm2021.azurewebsites.net/api/expenses');
    
   
      const data = await response.json();

      console.log(data);


      const exp = data.map(element => {
        return {
          id: element.id,
          date: new Date(element.date),
          title: element.title,
          amount: element.amount
        }
      });

      console.log(exp);
      setExpenses(exp);
    

  }

  return (
    <React.Fragment >
      {ReactDOM.createPortal(<NewExpense onAddExpense={addExpenseHandler} />, document.getElementById('new-expense-container')) }
      <button onClick={fetchExpensesHandler}>Lista</button>
      <Expenses items={expenses} />
    </React.Fragment>
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
