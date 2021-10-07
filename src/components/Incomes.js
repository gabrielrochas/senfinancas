import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { currencyFormat } from "./TransactionItem";

export default function Incomes() {
  const { transactions } = useContext(AppContext);

  let incomes = 0;
  transactions.forEach((transaction) => {
    if(transaction.type === "Income"){
      incomes += transaction.value;
    }
  })
  // transactions.map((transaction) => {
  //   return transaction.type === "Income" ? (incomes += transaction.value) : 0;
  // });

  return (
    <div className="alert alert-primary">
      <span>Incomes: {currencyFormat(incomes)}</span>
    </div>
  );
}
