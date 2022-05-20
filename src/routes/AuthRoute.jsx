import React, { Component } from "react"
import Nav from "../views/Nav"
import Content from "../views/Content"
import Footer from "../views/Footer"
import Admin from "../views/Admin"
import "./index.css"
import { Redirect, Route, Switch } from "react-router"
import { BackTop } from "antd"
import ScrollToTop from "../views/ScrollToTop"

export default class AuthRoute extends Component {
  render() {
    return (
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/blog">
          <Nav />
          <Content />
          <Footer />
          <BackTop>
            <img
              src={"https://cdn.narojay.site/215919.gif"}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "20px"
              }}
              alt=""
            />
          </BackTop>
          <ScrollToTop />
        </Route>
        <Redirect to="/blog/home" />
      </Switch>
    )
  }
}
