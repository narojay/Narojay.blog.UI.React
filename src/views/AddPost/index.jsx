import React, { useEffect, useRef, useState } from "react"
import "../Post/github-dark.css"
import "./index.css"
import hljs from "highlight.js"
import marked from "marked"
import { AddPostApi, GetTagsAsync } from "../../utils/request"
import { Button, Form, Input, Checkbox, Row, Col } from "antd"
const AddPost = () => {
  const [text, setText] = useState("")
  const [tags, settags] = useState([])
  const [checkTagId, setCheckTagId] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const post = useRef()
  const title = useRef()
  const label = useRef()
  const OnAddPost = () => {
    const postContent = post.current.innerText
    const titleContent = title.current.state.value
    const labelContent = label.current.state.value

    AddPostApi(titleContent, postContent, labelContent, checkTagId)
  }
  const onChange = (checkedValues) => {
    setCheckTagId(checkedValues)
  }

  useEffect(() => {
    GetTagsAsync().then((x) => {
      settags(x)
      setisLoading(true)
    })
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
  }, [checkTagId])
  return isLoading ? (
    <div>
      <div className="add-article-form">
        <Form
          name="basic"
          labelCol={{
            span: 8
          }}
          wrapperCol={{
            span: 16
          }}
          initialValues={{
            remember: true
          }}
          onFinish={OnAddPost}
        >
          <Form.Item
            labelCol={{ span: 1, offset: 1 }}
            wrapperCol={{ span: 10, offset: 1 }}
          >
            <span className="add-article">写文章</span>
          </Form.Item>
          <Form.Item
            labelCol={{ span: 1, offset: 1 }}
            wrapperCol={{ span: 10, offset: 1 }}
            label="标题："
            name="title"
            rules={[{ required: true, message: "标题不能为空" }]}
          >
            <Input ref={title} className="add-article-form-item"></Input>
          </Form.Item>
          <Form.Item
            labelCol={{ span: 1, offset: 1 }}
            wrapperCol={{ span: 10, offset: 1 }}
            label="标签:"
            name="label"
            rules={[{ required: true, message: "标题不能为空" }]}
          >
            <Input ref={label} className="add-article-form-item"></Input>
          </Form.Item>
          <Form.Item
            labelCol={{ span: 1, offset: 10 }}
            wrapperCol={{ span: 15, offset: 1 }}
          >
            <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
              <Row>
                {tags.map((x) => (
                  <Col key={x.id} span={4}>
                    <Checkbox value={x.id}>{x.name}</Checkbox>
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 15, offset: 1 }}>
            <Button type="primary" htmlType="submit">
              发布
            </Button>
          </Form.Item>
        </Form>
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
  ) : (
    <></>
  )
}

export default AddPost
