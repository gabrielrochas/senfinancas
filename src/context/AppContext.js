import React, { createContext, useEffect, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(exp => exp.id !== action.payload)
      };
    
      case 'ADD_BUDGET':
        return {
          ...state,
          budget: action.payload,
        }
    
    default:
      return state;
  }
};

// Initial state
const initialState = JSON.parse(localStorage.getItem("localTransactions")) || [{title: "Item 1", type:"Income", value: "0"}];

// Create context
export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Persisting data in localStorage
  useEffect(() => {
    localStorage.setItem("localTransactions", JSON.stringify(state));
  }, [state])
  return (

    <AppContext.Provider
      value={{
        transactions: state.transactions,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
