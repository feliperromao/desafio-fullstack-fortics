import React from 'react'
import SidebarToogle from './SidebarToogle'

export default props => (
  <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion">
    {props.children}
    {/* <SidebarToogle /> */}
  </ul>
)