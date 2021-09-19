import React, { useEffect, useState } from "react"
import { GetPostList } from "../../utils/request"

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
    props.history.push("/video/post/" + id)
  }
  const list = state.map((x) => (
    <li key={x.id} onClick={() => GetDetail(x.id)}>
      {x.title}
    </li>
  ))
  return list
}

export default PostList
