import React, { Component } from "react"
// import { Link, Route } from "react-router-dom";

import Nav from "../views/Nav"
import Content from "../views/Content"
import Footer from "../views/Footer"
import "./index.css"
export default class AuthRoute extends Component {
  render() {
    return (
      <div
        className="Blog-box"
        style={{
          backgroundImage:
            "url(https://img-blog.csdnimg.cn/80c2751421694ebf86bd7f6b58a95194.png)"
        }}
      >
        <Nav />
        <Content />
        <Footer />
      </div>
    )
  }
}
