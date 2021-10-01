import React, { useState } from "react"
import PostList from "../PostList"
import "./index.css"
const Home = () => {
  const [state, setstate] = useState({
    currentPage: 1,
    pageSize: 10,
    totalCount: 10
  })
  const setTotalCount = (page) => {
    state.totalCount = page
    setstate({ ...state })
  }

  return (
    <div>
      <div className="home-top-img">
        <span className="home-top-title animate__animated animate__lightSpeedInLeft">
          木叶飞舞之处，火亦生生不息
        </span>
      </div>
      <div className="home-body">
        <div className="home-main">
          <PostList
            currentPage={state.currentPage}
            pageSize={state.pageSize}
            setTotalCount={setTotalCount}
          />
        </div>
        <div className="home-aside">
          <div className="myname theme-color">你好，我是Narojay!</div>
          <div className="myname theme-color">你好，我是Narojay!</div>
          <div className="myname theme-color">你好，我是Narojay!</div>
        </div>
      </div>
    </div>
  )
}

export default Home
