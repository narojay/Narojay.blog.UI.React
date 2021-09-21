import React from "react"
import { Switch, Route } from "react-router-dom"
import LeaveMessage from "../LeaveMessage"
import PostList from "../PostList"
import AboutMe from "../AboutMe"
import Post from "../Post"
import Home from "../Home"
import "./index.css"

const Content = () => {
  return (
    <div className="content-box">
      <div className="content-center">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/posts" component={PostList} />
          <Route path="/leavemessage" component={LeaveMessage} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/post/:postId" component={Post} />
        </Switch>
      </div>
    </div>
  )
}

export default Content
