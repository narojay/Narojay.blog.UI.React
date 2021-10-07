import React, { useEffect, useState } from "react"
import { GetPostList } from "../../utils/request"
import "./index.css"
import "animate.css/animate.min.css"
import { withRouter } from "react-router-dom"
import { Pagination } from "antd"
import moment from "moment"
const PostList = (props) => {
  const [state, setstate] = useState({
    currentPage: 1,
    pageSize: 10,
    totalCount: 0,
    disable: false
  })
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const { currentPage, pageSize } = state
    GetPostList(currentPage, pageSize).then((x) => {
      const { data, totalCount } = x
      setPosts(data)
      setstate({
        currentPage: 1,
        pageSize: 10,
        totalCount: totalCount,
        disable: true
      })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const GetDetail = (id) => {
    props.history.push("post/" + id)
  }

  const setPage = (page) => {
    state.currentPage = page
    GetPostList(page, state.pageSize).then((x) => {
      const { data } = x
      setPosts(data)
      state.currentPage = page
      setstate({ ...state })
    })
  }

  const page =
    state.disable === true ? (
      <Pagination
        current={state.currentPage}
        total={state.totalCount}
        defaultPageSize={state.pageSize}
        onChange={(page) => setPage(page)}
      />
    ) : (
      <div></div>
    )
  const list = (
    <div className="box">
      <div>
        {posts.map((x) => (
          <div key={x.id} className="animate__animated animate__pulse">
            <div
              onClick={() => GetDetail(x.id)}
              className="article-item theme-color"
            >
              <div className="article-item-info">
                <div className="article-item-title">{x.title}</div>
                <div className="article-item-info">
                  <div className="tag-right">{x.label}</div>
                  <div className="tag-left">
                    {moment(x.creationTime).format("YYYY-MM-DD")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {page}
    </div>
  )
  return list
}

export default withRouter(PostList)
