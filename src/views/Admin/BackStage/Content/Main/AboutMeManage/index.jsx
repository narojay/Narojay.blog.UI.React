import { Button, message, Popconfirm } from "antd"
import TextArea from "antd/lib/input/TextArea"
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
  if (loading) {
    return <div></div>
  } else {
    return (
      <div>
        <div style={{ fontSize: "50px" }}> 编辑关于我内容</div>

        <div style={{ display: "flex" }}>
          <TextArea
            defaultValue={content}
            autoSize={{ minRows: 12 }}
            allowClear
            onChange={changeContent}
          />
          <TextArea autoSize={{ minRows: 12 }} value={content} />
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
