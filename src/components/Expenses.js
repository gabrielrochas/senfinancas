import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { currencyFormat } from "./TransactionItem";

export default function Expenses() {
  const { transactions } = useContext(AppContext);

  let expenses = 0;
  transactions.forEach((transaction) => {
    if(transaction.type === "Expenses") {
      expenses += transaction.value
    }
  })

  return (
    <div className={`alert alert-danger`}>
      <span>Expenses: {currencyFormat(expenses)}</span>
    </div>
  );
}
