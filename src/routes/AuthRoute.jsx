import React, { Component } from "react"
// import { Link, Route } from "react-router-dom";

import { Route } from "react-router-dom"
import Home from "../views/Home/index.jsx"

export default class AuthRoute extends Component {
  render() {
    return (
      <div id="test">
        <Route path="/" component={Home} />
      </div>
    )
  }
}
