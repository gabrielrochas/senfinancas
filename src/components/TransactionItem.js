import React, { useContext } from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { AppContext } from "../context/AppContext";

export default function TransactionItem(props) {
  const { dispatch } = useContext(AppContext);

  const currencyFormat = (value) => {
    return value.toLocaleString("pt-BR", { style: "currency", currency:"BRL"})
  }

  const handleDeleteTransaction = () => {
    dispatch({ type: "DELETE_TRANSACTION", payload: props.id });
  };
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.type}</td>
      <td>{props.category}</td>
      <td>{props.date}</td>
      <td>{currencyFormat(props.value)}</td>
      <td>
        <BsPencilSquare size="1em"></BsPencilSquare>
        <BsTrash size="1em" onClick={handleDeleteTransaction}></BsTrash>
      </td>
    </tr>
  );
}
