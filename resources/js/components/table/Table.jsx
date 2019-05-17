import React from 'react'

export default props => (
  <table id={props.id} className={`table ${props.style}`}>
    {props.children}
  </table>
)