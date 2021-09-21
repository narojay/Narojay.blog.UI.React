import React, { useEffect, useState } from "react"
import { GetPostList } from "../../utils/request"
import "./index.css"
import "animate.css/animate.min.css"
import { withRouter } from "react-router"

const PostList = (props) => {
  const [state, setstate] = useState([])

  useEffect(() => {
    GetPostList(1, 10).then((x) => {
      console.log(x)
      setstate(x.data)
    })
  }, [])
  const GetDetail = (id) => {
    console.log(id)
    console.log(props)
    props.history.push("post/" + id)
  }

  const list1 = (
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
  return list1
}

export default withRouter()
