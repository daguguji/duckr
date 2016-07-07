import React from 'react'
import {Router, Route, hashHistory} from 'react-router'
import Maincontainer from '../containers'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Maincontainer} />
  </Router>
)

export default routes