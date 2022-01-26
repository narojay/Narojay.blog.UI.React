import React, { useEffect, useRef, useState } from "react"
import "../Post/github-dark.css"
import "./index.css"
import hljs from "highlight.js"
import marked from "marked"
import { AddPostApi } from "../../utils/request"
import { Button, Input } from "antd"

const AddPost = () => {
  const [text, setText] = useState("")
  const post = useRef()
  const title = useRef()
  const label = useRef()
  const OnAddPost = () => {
    const postContent = post.current.innerText
    const titleContent = title.current.value
    const labelContent = label.current.value
    AddPostApi(titleContent, postContent, labelContent)
  }
  useEffect(() => {
    // 配置highlight
    hljs.configure({
      tabReplace: "",
      classPrefix: "hljs-",
      languages: [
        "CSS",
        "HTML",
        "JavaScript",
        "Python",
        "TypeScript",
        "Markdown"
      ]
    })
    // 配置marked
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: (code) => hljs.highlightAuto(code).value,
      gfm: true, //默认为true。 允许 Git Hub标准的markdown.
      tables: true, //默认为true。 允许支持表格语法。该选项要求 gfm 为true。
      breaks: true //默认为false。 允许回车换行。该选项要求 gfm 为true。
    })
  }, [])
  return (
    <div>
      <div>
        <span className="add-article">写文章</span>
      </div>
      <div className="add-article-form">
        <span>标题：</span>
        <Input ref={title} className="add-article-form-item"></Input>
        <span>标签:</span>
        <Input ref={label} className="add-article-form-item"></Input>
        <Button onClick={OnAddPost}>发布</Button>
      </div>

      <div className="marked">
        <div
          ref={post}
          className="input-region markdownStyle"
          contentEditable="plaintext-only"
          // suppressContentEditableWarning
          onInput={(e) => {
            setText(e.target.innerText)
          }}
        ></div>
        <div
          className="show-region markdownStyle"
          dangerouslySetInnerHTML={{
            __html: marked(text).replace(/<pre>/g, "<pre id='hljs'>")
          }}
        ></div>
      </div>
    </div>
  )
}

export default AddPost
