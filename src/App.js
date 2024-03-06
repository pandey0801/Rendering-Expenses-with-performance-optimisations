// import logo from './logo.svg';
// import './App.css';
// import './components/Expense.css'

// import React, {useState} from 'react';
// import { useState } from "react";
import React, {useState} from 'react';

import './components/Expenses/Expense.css'
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from './components/UI/Card';
import NewExpense from './components/NewExpense/NewExpense';

import ExpensesFilter from './components/Expenses/ExpenseFilter';

const DUMMY_EXPENSES = [
  {
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    id: 'e1',
  },
  { 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12),
    id: 'e2', 
  },
  {
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    id: 'e3',
  },
  {
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    id: 'e4',
  },
];

const App = () => {

  const [expenses,setEXpenses] = useState(DUMMY_EXPENSES);

  const AddExpenseHandler = expense =>{
    // console.log("in reat");
    // console.log(expense);
    setEXpenses((preExpense)=>{
      return [expense, ...preExpense];
    })
  }


  const [filteredYear,setFilteredYear] = useState('2020');
  const filterChangeHandler= selectedYear =>{
    setFilteredYear(selectedYear);
    console.log(filteredYear);
  };

  return (
    <div>
      <NewExpense onAddExpense={AddExpenseHandler} />

      
      {/* <ExpensesFilter/> */}
    
    <Card className="expenses">
     
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

    {/* {console.log(expenses)} */}
    
{expenses.map(expense => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
))}



      {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem  title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem  title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem  title={expenses[3].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
    */}


    </Card>
    </div>
  );
}

export default App;
