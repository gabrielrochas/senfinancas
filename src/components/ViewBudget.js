import React from 'react'

export default function ViewBudget(props) {
  return (
    <>
      <span>Budget: R${props.budget}</span>
      <button type="button" className="btn btn-primary" onClick={props.handleEditClick}>Edit</button>
    </>
  )
}
