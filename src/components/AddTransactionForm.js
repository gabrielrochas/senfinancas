import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

export const GetDate = () => {
  const date = new Date().toLocaleString("pt-BR")
  return date;
};

export default function AddTransactionForm() {
  const { dispatch } = useContext(AppContext);
  const [fields, setFields] = useState("");

  // Get actual date and time
  const date = GetDate();

  // Set fields values
  const handleChange = (e) => {
    const auxFields = { ...fields };
    auxFields[e.target.id] =
      e.target.id === "value" ? parseFloat(e.target.value) : e.target.value;
    setFields(auxFields);
  };

  // Clear form fields
  const handleClear = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    setFields({ itemvalues: [{}] });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = { id: uuidv4(), date: date, ...fields };
    dispatch({ type: "ADD_EXPENSE", payload: transaction });
    handleClear();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm col-md-8">
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="title" placeholder="#" required onChange={handleChange} />
            <label htmlFor="title">Title</label>
          </div>
        </div>
        <div className="col-sm col-md-4">
          <div className="form-floating mb-3">
            <select name="type" id="type" className="form-select" aria-label=" Floating label select example" onChange={handleChange}>
              <option value=""></option>
              <option value="Income">Income</option>
              <option value="Expenses">Expenses</option>
            </select>
            <label htmlFor="type">Transaction Type</label>
          </div>
        </div>
      </div>
      <div className="row">
      <div className="col-sm col-md-8">
          <div className="form-floating mb-3">
            <select name="category" id="category" className="form-select" aria-label=" Floating label select example" onChange={handleChange}>
              <option value=""></option>
              {fields.type === "Income" ? (
                
                <option value="Salary">Salary</option>

              ):(

              <option value="Family">Family</option>
              )}
              <option value="Health">Health</option>
              <option value="Holiday">Holiday</option>
              <option value="Studies">Studies</option>
            </select>
            <label htmlFor="category">Category</label>
          </div>
        </div>
        <div className="col-sm col-md-4">
          <div className="form-floating mb-3">
            <input type="number" className="form-control" id="value" placeholder="#" required onChange={handleChange} />
            <label htmlFor="name">Value</label>
          </div>
        </div>
      
      </div>
      <div className="row">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
