import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import TransactionItem from "./TransactionItem";

export default function TransactionList() {
  const { transactions } = useContext(AppContext);

  return (
    <>
      {transactions.length > 0 ? (
        <table className="table table-bordeless">
          <thead>
            <tr>
              <th className="col-md-4">Transaction</th>
              <th>Type</th>
              <th>Category</th>
              <th>Date</th>
              <th>Value</th>
              <th className="col-md-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transacation) => (
              <TransactionItem
                key={transacation.id}
                id={transacation.id}
                title={transacation.title}
                type={transacation.type}
                category={transacation.category}
                date={transacation.date}
                value={transacation.value}
              />
            ))}
          </tbody>
        </table>
      ) : (
        "No moviment yet"
      )}
    </>
  );
}
