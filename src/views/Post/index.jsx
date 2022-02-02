import marked from "../../utils/blogmarked.js"
import React, { useState } from "react"
import "./github-dark.css"
import "./index.css"
import "./markdownStyle.css"
import { getConfigsByProductId } from "../../utils/request"
import moment from "moment"
import "magic.css/dist/magic.min.css"
const Post = (props) => {
  const [isLoading, setisLoading] = useState(false)
  const [data, setData] = useState(
    {
      title: "",
      content: "",
      author: "",
      creationTime: "",
      modifyTime: "",
      userId: 0,
      user: {},
      isTop: false,
      likeCount: 0,
      unlikeCount: 0,
      comments: []
    },
    []
  )
  React.useEffect(() => {
    setisLoading(false)
    const { postId } = props.match.params
    getConfigsByProductId(postId).then((res) => {
      setData(res.data)
      setisLoading(true)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  //替换所有的换行符
  let html = marked(data.content).replace(/<pre>/g, "<pre id='hljs'>")

  const result = isLoading ? (
    <div className="standard-page-box theme-color ">
      <div className="title magictime slideLeftReturn">
        <div>{data.title}</div>
        <div className="author">
          <div>作者：{data.author}</div>
          {"\u00a0 \u00a0 \u00a0"}
          <div>时间: {moment(data.creationTime).format("YYYY-MM-DD")} </div>
        </div>
      </div>
      <div
        className="markdownStyle magictime slideRightReturn"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>

      <div>
        支持：{data.likeCount} 反对：{data.unlikeCount}
      </div>
    </div>
  ) : (
    <></>
  )
  return result
}

export default Post
