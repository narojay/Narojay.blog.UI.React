import React, { Component } from "react"
// import { Link, Route } from "react-router-dom";

import { Route } from "react-router-dom"
import Login from "../views/Login"
import Video from "../views/video/Video.jsx"

export default class AuthRoute extends Component {
  render() {
    return (
      <div id="test">
        <Route path="/" exact component={Login} />
        <Route path="/video" component={Video} />
      </div>
    )
  }
}
