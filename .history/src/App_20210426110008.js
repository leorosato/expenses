import logo from './logo.svg';
import './App.css';
import './components/ExpenseItem';
import ExpenseItem from './components/ExpenseItem.js';

function App() {
  return (
    <div className="App">
      <ExpenseItem />
    </div>
  );
}

export default App;
