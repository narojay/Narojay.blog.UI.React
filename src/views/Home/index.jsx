import React, { useState } from "react"
import PageNav from "../PageNav"
import PostList from "../PostList"
import "./index.css"
const Home = () => {
  const [state, setstate] = useState({
    currentPage: 1,
    pageSize: 10,
    totalCount: 10
  })
  const setPage = (page) => {
    state.currentPage = page
    setstate({ ...state })
  }

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
          <PageNav
            currentPage={state.currentPage}
            totalCount={state.totalCount}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
