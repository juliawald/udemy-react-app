import logo from "./logo.svg";
import React from "react";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Board Games",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2",
    title: "Horseback Riding Lessons",
    amount: 799.49,
    date: new Date(2021, 2, 12)
    },
    {
      id: "e3",
      title: "Rent",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Mattress",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <div className="header-text">
        <h2>This is my Udemy React App!</h2>
        <p>Instructed by Maximilian Schwarzmüller, created by Julia Wald</p>
      </div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
