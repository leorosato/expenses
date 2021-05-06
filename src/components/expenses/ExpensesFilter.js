import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  console.log(props.years);
  
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
        <option value=''>Seleziona un anno</option>
          {props.years.map((year) => {
             return <option value={year}>{year}</option>
          } )}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
