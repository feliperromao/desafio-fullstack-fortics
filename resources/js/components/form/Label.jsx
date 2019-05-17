import React from 'react'

export default props => (
  <label className={props.style} htmlFor={props.to}>
    {props.title}
    { props.required ? <span className="text-danger font-weight-bold">*</span>: null }
  </label>
)