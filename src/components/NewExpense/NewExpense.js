import React,{useState} from 'react';

import ExpenseForm from './ExpenseForm'; 
import './NewExpense.css';


function NewExpense(props) {

  const [isEditing,setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) =>
  {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }
  
  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const cancelEditingHandler = () => {
    setIsEditing(false);
    return (<button type='button' onClick={startEditingHandler}>Add New Expense</button>);
  }
 
  return (
    <div className='new-expense'>
        { !isEditing && (<button type='button' onClick={startEditingHandler}>Add New Expense</button>) }
        { isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={cancelEditingHandler} /> }
    </div>
  );
};

export default NewExpense;