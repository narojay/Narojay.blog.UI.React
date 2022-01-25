import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import AddPost from "../../../../AddPost"
import Say from "../../../Say"
import Article from "./Article"
import Home from "./Home"
import "./index.css"
const Main = () => {
  return (
    <div className="MainBox">
      <Switch>
        <Route path="/admin/home" component={Home} />
        <Route path="/admin/addpost" component={AddPost} />
        <Route path="/admin/say" component={Say} />
        <Route path="/admin/article" component={Article} />
        {/* <Route path="/admin/msg" component={Msg} />
        <Route path="/admin/link" component={Link} />
        <Route path="/admin/show" component={Show} />
        <Route path="/admin/about" component={About} />
        <Route path="/admin/log" component={Log} />
        <Route path="/admin/draft" component={Draft} />
        <Route path="/admin/addArticle" component={AddArticle} />
        <Route path="/admin/addGallery" component={AddGallery} />
        <Route path="/admin/aboutEdit" component={AboutEdit} /> */}
        <Redirect to="/admin/home" />
      </Switch>
    </div>
  )
}

export default Main
