import { Button, message, Popconfirm } from "antd"
import TextArea from "antd/lib/input/TextArea"
import React, { useEffect, useState } from "react"
import {
  getAboutMeContentAsync,
  ModifyAboutMeContentAsync
} from "../../../../../../utils/request"

const AboutMeManage = () => {
  const [content, setcontent] = useState("")

  const changeContent = (x) => {
    setcontent(x.currentTarget.value)
  }

  const save = () => {
    ModifyAboutMeContentAsync(content).then((x) => {
      message.success("保存成功")
    })
  }
  useEffect(() => {
    getAboutMeContentAsync().then((x) => {
      setcontent(x)
    })
  }, [])

  return (
    <div>
      <Popconfirm
        placement="bottomRight"
        title="确定要保存吗？"
        onConfirm={save}
        okText="确定"
        cancelText="取消"
      >
        <Button type="primary">保存</Button>
      </Popconfirm>
      <div style={{ display: "flex" }}>
        <TextArea
          key={content ? "notLoadedYet" : "loaded"}
          defaultValue={content}
          autoSize={{ minRows: 12 }}
          allowClear
          onChange={changeContent}
        />
        <TextArea autoSize={{ minRows: 12 }} value={content} />
      </div>
    </div>
  )
}

export default AboutMeManage
