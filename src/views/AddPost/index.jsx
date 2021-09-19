import React, { useEffect, useRef, useState } from "react"
import "../Post/github-dark.css"
import "./index.css"
import hljs from "highlight.js"
import marked from "marked"
import { AddPostApi } from "../../utils/request"

const AddPost = () => {
  const [text, setText] = useState("")
  const post = useRef()
  const title = useRef()
  const OnAddPost = () => {
    const postContent = post.current.innerText
    const titleContent = title.current.value
    AddPostApi(titleContent, postContent)
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
      <header>基于React的markdown实时编辑器</header>
      标题：<input ref={title}></input>
      <button onClick={OnAddPost}>发布</button>
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
