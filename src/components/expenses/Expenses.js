import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return filteredYear==='' || expense.date.getFullYear().toString() === filteredYear ;
  });

  const years = props.items.reduce((total, currentValue, currentIndex, arr) => {
    return total.add(currentValue.date.getFullYear().toString());
  }, new Set());

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          years={Array.from(years)}
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
