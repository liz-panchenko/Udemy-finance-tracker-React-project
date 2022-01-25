import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = filterExpensesArray();

  function filterExpensesArray() {
    return props.expenses.filter(
      (expense) => expense.date.getFullYear().toString() === filteredYear
    );
  }

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        initialYear={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
}
