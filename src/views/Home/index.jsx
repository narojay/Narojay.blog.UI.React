import React from "react"
import PostList from "../PostList"
import "./index.css"
const Home = () => {
  return (
    <div>
      <div className="home-top-img">
        <span className="home-top-title animate__animated animate__lightSpeedInLeft">
          木叶飞舞之处，火亦生生不息
        </span>
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
