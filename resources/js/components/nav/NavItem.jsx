import React from 'react'
import { Link } from 'react-router-dom'

class NavItem extends React.Component {
  render() {
    return (
      <li className="nav-item">
        <Link className="nav-link" to={this.props.path} >
          <i className={this.props.icon}></i>
          <span>{this.props.title}</span>
        </Link>
      </li>
    )
  }
}

export default NavItem;