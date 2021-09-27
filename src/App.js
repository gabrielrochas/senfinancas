import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AddTransactionForm from "./components/AddTransactionForm";
import Incomes from "./components/Incomes";
import TransactionList from "./components/TransactionList";
import TotalTransactions from "./components/TotalTransactions";
import Expenses from "./components/Expenses";
import { AppProvider } from "./context/AppContext";

function App() {

  return (
    <AppProvider>
      <div className="container">
        <h1>SenFinancial</h1>
        <div className="row mt-3">
          <div className="col-sm-6 col-md-4">
            <Incomes />
          </div>
          <div className="col-sm-6 col-md-4">
            <Expenses />
          </div>
          <div className="col-sm-6 col-md-4">
            <TotalTransactions />
          </div>
        </div>
        <h3 className="mt-3">Transactions</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <TransactionList />
          </div>
        </div>
        <h3 className="mt-3">Add transaction</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddTransactionForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
