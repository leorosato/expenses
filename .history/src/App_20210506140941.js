import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/expenses/NewExpense';


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


//const EXP_INITIAL = [];

// class App extends Component {



//   constructor() {
//     super();
//     console.log('constructor');
//     this.state = {
//       expenses: EXP_INITIAL
//     }
//   }

//   addExpenseHandler(expense) {
//     this.setState((state, props) => ({
//       expenses: [...state.expenses, expense]
//     }));
//   }

//   componentDidMount() {
//     console.log('componentDidMount');
//   }

//   componentDidUpdate() {
//     console.log('componentDidUpdate');
//   }

//   componentWillUnmount() {
//     console.log('componentWillUnmount');
//   }



//   render() {
//     console.log('render');
//     return <>
//       {



//         ReactDOM.createPortal(
//           <NewExpense currentId={this.state.expenses.length} onAddExpense={this.addExpenseHandler.bind(this)} />,
//           document.getElementById('new-exp-div')
//         )}

//       <Expenses expenses={this.state.expenses} />
//     </>
//   }
const App = (props) => {
  const [expenses, setExpenses] = useState(EXP_INITIAL);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

  const addExpenseHandler = (expense) => {
    setExpenses((prev) => [...prev, expense]
    )
  }

  useEffect(() => {
    const logged = localStorage.getItem('isLoggedIn');
    if (logged === '1') {
      setIsLoggedIn(true);
    }
    return () => { console.log('cleanup') }
  }, [])

  useEffect(() => {
    //controllo validità
    if (email.includes('@') && password.length > 6) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    return () => { console.log('cleanup') }
  }, [])


  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  }

  const logoutHandler = () => {
    localStorage.setItem('isLoggedIn', '0');
    setIsLoggedIn(false);
  }

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  }

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  }

  return (<div className="App" >
    isValid: {isValid}
    {isLoggedIn ?
      (<div>
        <p>Benvenuto</p>
        <button onClick={logoutHandler}>LOGOUT</button>
      </div>) : (
        <div>

          <input
            type='text'
            value={email}
            onChange={emailChangeHandler}
          />
          <input
            type='text'
            value={password}
            onChange={passwordChangeHandler}
          />
          <button onClick={loginHandler}>LOGIN</button>
        </div>
      )
    }

    <NewExpense currentId={expenses.length} onAddExpense={addExpenseHandler} />
    <Expenses expenses={expenses} />
  </div>);
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
