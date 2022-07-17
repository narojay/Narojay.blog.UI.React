import React, { useEffect, useRef, useState } from "react"
import "../Post/github-dark.css"
import "./index.css"
import hljs from "highlight.js"
import marked from "marked"
import { SavePostApi, GetPostById, GetTagsAsync } from "../../utils/request"
import { Button, Form, Input, Checkbox, Row, Col } from "antd"
const AddPost = (props) => {
  const [text, setText] = useState("")
  const [content, setcontent] = useState("")
  const [postState, setpostState] = useState("")
  const [tags, settags] = useState([])
  const [checkTagId, setCheckTagId] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const SavePost = (e) => {
    console.log(text)
    SavePostApi(postState?.id, e.title, text, e.label, checkTagId)
  }
  const onChange = (checkedValues) => {
    const result = Array.from(new Set(checkedValues))
    setCheckTagId(result)
  }

  useEffect(() => {
    var param = new URLSearchParams(props.location.search)
    var id = param.get("articleId")
    if (id !== null) {
      GetPostById(id).then((x) => {
        setpostState(x)
        if (x.postTagDto != null)
          setCheckTagId(x.postTagDto.map((tt) => tt.tagId))
        GetTagsAsync().then((x) => {
          settags(x)
          setisLoading(true)
        })
        setcontent(x.content)
        setText(x.content)
      })
    } else {
      GetTagsAsync().then((x) => {
        settags(x)
        setisLoading(true)
      })
    }
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
  }, [content, props.location.search])
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
          onFinish={SavePost}
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
            initialValue={postState.title}
            rules={[{ required: true, message: "标题不能为空" }]}
          >
            <Input
              key={postState.title}
              className="add-article-form-item"
            ></Input>
          </Form.Item>
          <Form.Item
            labelCol={{ span: 1, offset: 1 }}
            wrapperCol={{ span: 10, offset: 1 }}
            label="标签:"
            name="label"
            initialValue={postState.label}
            rules={[{ required: true, message: "标题不能为空" }]}
          >
            <Input
              key={postState.label}
              className="add-article-form-item"
            ></Input>
          </Form.Item>
          <Form.Item
            labelCol={{ span: 1, offset: 10 }}
            wrapperCol={{ span: 15, offset: 1 }}
          >
            <Checkbox.Group
              style={{ width: "100%" }}
              onChange={onChange}
              defaultValue={checkTagId}
            >
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
          className="input-region markdownStyle"
          contentEditable="plaintext-only"
          suppressContentEditableWarning
          onInput={(e) => {
            setText(e.target.innerText)
          }}
        >
          {content}
        </div>
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
