import React from 'react'
import Topbar from '../nav/Topbar'
import Footer from '../commons/Footer'

export default props => (
  <React.Fragment>
    <div id="content">
      <Topbar />
      <div className="container-fluid">
        {props.children}
      </div>
    </div>
    <Footer />
  </React.Fragment>
)
