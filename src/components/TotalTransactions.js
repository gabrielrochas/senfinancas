import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { currencyFormat } from "./TransactionItem";

export default function TotalTransactions() {
  const { transactions } = useContext(AppContext);
  let incomes = 0
  let expenses = 0
  transactions.map((transaction) => {
    return (
    transaction.type === "Income" ? (incomes += transaction.value) : (expenses += transaction.value))
  })

  const balance = incomes - expenses;

  const typeAlert = (incomes === expenses ? "alert-secondary" : incomes > expenses ? "alert-success" : "alert-danger")
  return (
    <div className={`alert ${typeAlert}`}>
      <span>Balance: {currencyFormat(balance)}</span>
    </div>
  );
}
