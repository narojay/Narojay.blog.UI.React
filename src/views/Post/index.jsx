import marked from "../../utils/blogmarked.js"
import React, { useEffect, useState } from "react"
import "antd/dist/antd.css"
import "./github-dark.css"
import "./index.css"
import "./markdownStyle.css"
import {
  AddLikeOrUnlikeCountAsync,
  getConfigsByProductId
} from "../../utils/request"
import moment from "moment"
import { withRouter } from "react-router-dom"
import { oppose, support } from "../../utils/constant.js"
import { Reveal } from "react-reveal"
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
  }, [props.match.params])

  const addLikeCount = () => {
    AddLikeOrUnlikeCountAsync(data.id, 0).then((x) => {
      data.likeCount = data.likeCount + 1
      setData({ ...data })
    })
  }
  const addUnlikeCount = () => {
    AddLikeOrUnlikeCountAsync(data.id, 1).then((x) => {
      data.unlikeCount = data.unlikeCount + 1
      setData({ ...data })
    })
  }
  //替换所有的换行符
  let html = marked(data.content).replace(/<pre>/g, "<pre id='hljs'>")

  const result = isLoading ? (
    <Reveal>
      <div key={data.key}>
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
          <div className="support-Box">
            <div className="support-oppose-action" onClick={addLikeCount}>
              {support}
            </div>
            <div>{data.likeCount}</div>
            <div className="support-oppose-action" onClick={addUnlikeCount}>
              {oppose}
            </div>
            <div>{data.unlikeCount}</div>
          </div>
        </div>
      </div>
    </Reveal>
  ) : (
    <></>
  )
  return (
    <Reveal effect="fadeInUp" delay={100}>
      {result}
    </Reveal>
  )
}

export default withRouter(Post)
