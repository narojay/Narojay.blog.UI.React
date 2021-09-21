import React from "react"
import PostList from "../PostList"
import "./index.css"
import zz from "../../utils/3.gif"
const Home = () => {
  return (
    <div>
      <div className="home-top-img">
        <span className="home-top-title">木叶飞舞之处，火亦生生不息</span>
        <img style={{ width: "50px" }} src={zz} alt="" />
      </div>
      <div className="home-body">
        <div className="home-main">
          <PostList />
        </div>
      </div>
    </div>
  )
}

export default Home
