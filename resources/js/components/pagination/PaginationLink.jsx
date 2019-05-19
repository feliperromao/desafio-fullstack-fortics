import React from "react"

export default props => (
  <li className="page-item">
    <a
      className={(props.current == props.page) ? 'page-link text-secondary': 'page-link text-primary'}
      style={{cursor: 'pointer', textDecoration: 'underline'}}
      onClick={() => props.onClick(props.page)}>{props.page}</a>
  </li>
)