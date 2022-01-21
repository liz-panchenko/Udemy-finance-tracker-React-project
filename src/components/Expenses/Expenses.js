import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
  const [savedSelectedYear, setSavedSelectedYear] = useState("");
  const selectedYearHandler = (selectedYear) => {
    setSavedSelectedYear(selectedYear);
    console.log("It's from Expenses.js test!");
    console.log(selectedYear);
    console.log(savedSelectedYear);
  };
  return (
    <div>
      <ExpensesFilter onYearSelection={selectedYearHandler} />
      <Card className="expenses">
        <ExpenseItem
          date={props.expenses[0].date}
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
        />
        <ExpenseItem
          date={props.expenses[1].date}
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
        />
        <ExpenseItem
          date={props.expenses[2].date}
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
        />
        <ExpenseItem
          date={props.expenses[3].date}
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
        />
      </Card>
    </div>
  );
}
