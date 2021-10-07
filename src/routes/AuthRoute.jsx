import React, { Component } from "react"
import Nav from "../views/Nav"
import Content from "../views/Content"
import Footer from "../views/Footer"
import "./index.css"
import Admin from "../views/Admin"
import { Redirect, Route, Switch } from "react-router"
export default class AuthRoute extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/blog">
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
          </Route>
          <Redirect to="/blog/home" />
        </Switch>
      </div>
    )
  }
}
