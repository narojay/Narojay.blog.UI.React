import marked from "marked"
import React, { useState } from "react"
import hljs from "highlight.js"
import "./github-dark.css"
import { getConfigsByProductId } from "../../utils/request"
const Post = (props) => {
  const [data, setData] = useState(
    {
      title: "",
      content: "",
      author: "",
      creationTime: "2021-09-18T15:47:33.298Z",
      modifyTime: "2021-09-18T15:47:33.298Z",
      userId: 0,
      user: {},
      comments: []
    },
    []
  )
  React.useEffect(() => {
    hljs.configure({
      tabReplace: "",
      classPrefix: "hljs-",
      languages: [
        "CSS",
        "HTML",
        "JavaScript",
        "Python",
        "TypeScript",
        "Markdown",
        "csharp"
      ]
    })

    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: (code) => hljs.highlightAuto(code).value,
      gfm: true, //默认为true。 允许 Git Hub标准的markdown.
      tables: true, //默认为true。 允许支持表格语法。该选项要求 gfm 为true。
      breaks: true //默认为false。 允许回车换行。该选项要求 gfm 为true。
    })
    const { postId } = props.match.params
    getConfigsByProductId(postId).then((res) => {
      setData(res.data)
    })
  }, [props.match.params])
  //替换所有的换行符
  let html1 = marked(data.content).replace(/<pre>/g, "<pre id='hljs'>")
  const result = <div dangerouslySetInnerHTML={{ __html: html1 }}></div>
  return result
}

export default Post
