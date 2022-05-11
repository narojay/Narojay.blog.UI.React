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
          <Route path="/blog/home" component={Home} />
          <Route path="/blog/posts" component={PostList} />
          <Route path="/blog/soliloquize" component={Soliloquize} />
          <Route path="/blog/leavemessage" component={LeaveMessage} />
          <Route path="/blog/sitetimeline" component={SiteTimeLine} />
          <Route path="/blog/aboutme" component={AboutMe} />
          <Route path="/blog/post/:postId" component={Post} />
          <Route path="/blog/addpost" component={AddPost} />
          <Redirect to="/blog/home" />
        </Switch>
      </div>
    </div>
  )
}

export default Content
