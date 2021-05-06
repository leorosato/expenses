import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
      <img className="App-logo" src = "./logo.svg" ></img>
      <ExpenseItem />
    </div>
  );
}

export default App;
