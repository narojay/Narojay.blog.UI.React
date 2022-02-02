import React, { Component } from "react"
import Nav from "../views/Nav"
import Content from "../views/Content"
import Footer from "../views/Footer"
import Admin from "../views/Admin"
import "./index.css"
import { Redirect, Route, Switch } from "react-router"
import { BackTop } from "antd"
import up from "../img/up.svg"

export default class AuthRoute extends Component {
  render() {
    return (
      <div className="Blog-box">
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/blog">
            <div className="bgc">
              <Nav />
              <Content />
              <Footer />
              <BackTop>
                <img
                  src={up}
                  style={{
                    width: "50px",
                    height: "50px"
                  }}
                  alt=""
                />
              </BackTop>
            </div>
          </Route>
          <Redirect to="/blog/home" />
        </Switch>
      </div>
    )
  }
}
