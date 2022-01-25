import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
  if (props.expenses.length === 0) {
    return <h3 className="expenses-list__fallback">No expenses found.</h3>;
  } else {
    return (
      <ul className="expenses-list">
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))}
      </ul>
    );
  }
}
