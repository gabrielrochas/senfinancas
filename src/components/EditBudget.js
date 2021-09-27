import React, { useState } from "react";

export default function EditBudget(props) {
  const [value, setValue] = useState(props.budget);

  return (
    <>
      <input type="number" className="form-control mr-3" id="cost" value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="button" className="btn btn-primary" onClick={() => props.handleSaveClick(value)}>Save</button>
    </>
  )
}
