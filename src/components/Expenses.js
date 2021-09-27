import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Expenses() {
  const { transactions } = useContext(AppContext);

  let expenses = 0;
  transactions.map((transaction) => {
    return transaction.type === "Expenses" ? (expenses += transaction.value) : 0;
  });

  return (
    <div className={`alert alert-danger`}>
      <span>Expenses: R$ {expenses}</span>
    </div>
  );
}
