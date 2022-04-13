import React,{useState} from 'react';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    
    const [filteredYear,setFilteredYear] = useState('2020')
    
    const filterChangeHandler = selectedYear => {
      
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    
    
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter  
                    selected={filteredYear} 
                    onFilterChange = {filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
  );

}

export default Expenses;

/* const filteredExpensesArray = props.expenseList.filter((x) => {
    console.log(x.date.getFullYear());
    return (x.date.getFullYear().toString() === currentYear);
  });

  console.log(filteredExpensesArray);

  const mappedExpensesArray = filteredExpensesArray.map((x) => {
    return (
      <ExpenseItem key={x.id} title={x.title} amount={x.amount} date={x.date} />
    );
  });

  const onOptionChangeHandler = (selectedYear) => {
    setCurrentYear(selectedYear);
  }; */