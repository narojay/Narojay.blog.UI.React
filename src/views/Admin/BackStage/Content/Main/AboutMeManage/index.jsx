import { Button, message, Popconfirm } from "antd"
import TextArea from "antd/lib/input/TextArea"
import blogmarked from "../../../../../../utils/blogmarked.js"
import React, { useEffect, useState } from "react"
import {
  getAboutMeContentAsync,
  ModifyAboutMeContentAsync
} from "../../../../../../utils/request"
const AboutMeManage = () => {
  const [content, setcontent] = useState("")
  const [loading, setloading] = useState(true)

  const changeContent = (x) => {
    setcontent(x.currentTarget.value)
  }

  const save = () => {
    ModifyAboutMeContentAsync(content).then((x) => {
      message.success("保存成功")
    })
  }
  useEffect(() => {
    setloading(true)
    getAboutMeContentAsync().then((x) => {
      setcontent(x)
      setloading(false)
    })
  }, [])
  var html = blogmarked(content)
  if (loading) {
    return <div></div>
  } else {
    return (
      <div>
        <div style={{ fontSize: "50px" }}> 编辑关于我内容</div>

        <div style={{ display: "flex" }}>
          <TextArea
            defaultValue={content}
            style={{ flex: 1 }}
            autoSize={{ minRows: 12 }}
            allowClear
            onChange={changeContent}
          />

          <div
            className="markdownStyle"
            style={{ flex: 1, backgroundColor: "#fff" }}
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </div>
        <Popconfirm
          placement="bottomRight"
          title="确定要保存吗？"
          onConfirm={save}
          okText="确定"
          cancelText="取消"
        >
          <Button type="primary">保存</Button>
        </Popconfirm>
      </div>
    )
  }
}

export default AboutMeManage
