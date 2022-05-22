import marked from "../../utils/blogmarked.js"
import React, { useEffect, useState } from "react"
import "antd/dist/antd.css"
import "./github-dark.css"
import "./index.css"
import "./markdownStyle.css"
import { getConfigsByProductId } from "../../utils/request"
import moment from "moment"
import { withRouter } from "react-router-dom"
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
  useEffect(() => {
    const { postId } = props.match.params
    getConfigsByProductId(postId).then((res) => {
      setData(res.data)
      setisLoading(true)
    })
  })
  //替换所有的换行符
  let html = marked(data.content).replace(/<pre>/g, "<pre id='hljs'>")

  const result = isLoading ? (
    <div>
      <div className="title">
        <div>{data.title}</div>
        <div className="author">
          作者：{data.author} 发布时间:
          {moment(data.creationTime).format("YYYY-MM-DD")}{" "}
        </div>
      </div>

      <div className="standard-page-box theme-color ">
        <div
          className="markdownStyle magictime slideRightReturn"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
        <div>
          支持：{data.likeCount} 反对：{data.unlikeCount}
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
  return result
}

export default withRouter(Post)
