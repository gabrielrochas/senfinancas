import React from "react";
import { currencyFormat } from "./TransactionItem";

export default function ViewBudget(props) {
  return (
    <>
      <span>Budget: {currencyFormat(props.budget)}</span>
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </>
  );
}
