import React, { useEffect, useState } from "react"
import { GetPostList } from "../../utils/request"
import "./index.css"
import "animate.css/animate.min.css"
import { withRouter } from "react-router-dom"
const PostList = (props) => {
  const { currentPage, pageSize, setTotalCount } = props
  const [state, setstate] = useState([])
  console.log("----------------" + currentPage + "---------------" + pageSize)
  useEffect(() => {
    GetPostList(currentPage, pageSize).then((x) => {
      setstate(x.data)
      setTotalCount(x.totalCount)
    })
  }, [currentPage, pageSize])
  const GetDetail = (id) => {
    props.history.push("post/" + id)
  }
  const list = (
    <div>
      {state.map((x) => (
        <div key={x.id} className="animate__animated animate__pulse">
          <div
            onClick={() => GetDetail(x.id)}
            className="article-item theme-color"
          >
            <div className="article-item-title">{x.title}</div>
          </div>
        </div>
      ))}
    </div>
  )
  return list
}

export default withRouter(PostList)
