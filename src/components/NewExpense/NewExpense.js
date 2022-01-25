import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const [initialState, setInitialState] = useState(true);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  function clickHandler() {
    setInitialState(false);
  }
  
  if (initialState === true) {
    return (
      <div className="new-expense">
        <button className="button" onClick={clickHandler}>
          Add New Expense
        </button>
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
         changeState={setInitialState}
        />
      </div>
    );
  }
}
