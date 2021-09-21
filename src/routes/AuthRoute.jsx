import React, { Component } from "react"
// import { Link, Route } from "react-router-dom";

import Nav from "../views/Nav"
import Content from "../views/Content"
import Footer from "../views/Footer"
import "./index.css"
import bgcImage from "../utils/270187.jpg"
export default class AuthRoute extends Component {
  render() {
    return (
      <div
        className="Blog-box"
        style={{
          backgroundImage: "url(" + bgcImage + ")"
        }}
      >
        <Nav />
        <Content />
        <Footer />
      </div>
    )
  }
}
