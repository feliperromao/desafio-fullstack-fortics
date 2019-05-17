import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Sidebar from '../components/nav/Sidebar'
import Brand from '../components/nav/Brand'
import Divider from '../components/nav/Divider'
import NavItem from '../components/nav/NavItem'

import Dashboard from '../pages/dashboard/Dashboard'
import Refrigerantes from '../pages/refrigerantes/Refrigerantes'
import Sobre from '../pages/sobre/Sobre'

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Sidebar>
            <Brand />
            <Divider />
            <NavItem
              path="/"
              icon="fas fa-fw fa-tachometer-alt"
              title="Dashboard"
            />
            <Divider />
            <NavItem
              path="/refrigerantes"
              icon="fas fa-fw fa-box-open"
              title="Refrigerantes"
            />
            <Divider />
            <NavItem
              path="/sobre"
              icon="fas fa-fw fa-info-circle"
              title="Sobre"
            />
            <Divider />

          </Sidebar>
          <div id="content-wrapper" className="d-flex flex-column">
            <Route exact path="/" component={Dashboard} />
            <Route path="/refrigerantes" component={Refrigerantes} />
            <Route path="/sobre" component={Sobre} />
          </div>
        </React.Fragment>
      </Router>
    )
  }
}

export default Routes