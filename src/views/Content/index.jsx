import React from "react"
import { Redirect, Switch, Route } from "react-router-dom"
import LeaveMessage from "../LeaveMessage"
import PostList from "../PostList"
import AboutMe from "../AboutMe"
import Post from "../Post"
import Home from "../Home"
import AddPost from "../AddPost"
import "./index.css"
import SiteTimeLine from "../Admin/BackStage/Content/Main/SiteTimeLine/index,"
import Soliloquize from "../Soliloquize"

const Content = (props) => {
  return (
    <div className="content-box">
      <div className="content-center">
        <Switch>
          <Route path="/posts" component={PostList} />
          <Route path="/soliloquize" component={Soliloquize} />
          <Route path="/leavemessage" component={LeaveMessage} />
          <Route path="/sitetimeline" component={SiteTimeLine} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/post/:postId" component={Post} />
          <Route path="/addpost" component={AddPost} />
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  )
}

export default Content
