import moment from "moment"
import React, { useEffect, useState } from "react"
import { getLeaveMessages, pushLeaveMessages } from "../../utils/request"
import "./index.css"
import { EditTwoTone } from "@ant-design/icons"
import { Form, Input, Modal } from "antd"

const LeaveMessage = () => {
  const [data, setData] = useState([])
  const [visible, setVisible] = React.useState(false)
  const [confirmLoading, setConfirmLoading] = React.useState(false)
  const [parentId, setParentId] = React.useState(0)
  const handleCancel = () => {
    setVisible(false)
  }
  const showModal = (parentId) => {
    setParentId(parentId)
    setVisible(true)
  }
  const test = (values) => {
    setConfirmLoading(true)
    console.log("Success:", values)
    const { content, username, email } = values
    const leaveMessage = {
      content: content,
      nickName: username,
      email: email,
      parentId: parentId
    }
    pushLeaveMessages(leaveMessage)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }
  const [form] = Form.useForm()
  const handleOk = () => {
    form.submit()
  }
  const pushModel = (
    <Form
      form={form}
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
      onFinish={test}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!"
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!"
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Content"
        name="content"
        rules={[
          {
            required: true,
            message: "Please input your password!"
          }
        ]}
      >
        <Input.Password />
      </Form.Item>
    </Form>
  )

  useEffect(() => {
    getLeaveMessages(1, 10).then((x) => {
      setData(x.data)
    })
  }, [visible])

  const leaveMessages = (data, legth) =>
    data.map((x) => (
      <div key={x.id} className="leaveMessage-container ">
        {x.id ? (
          <div style={{ paddingLeft: legth }} key={x.id}>
            来自{x.isMaster ? "管理员" : "男酮"}: {x.nickName} 的留言 #
            {moment(x.creationTime).format("YYYY-MM-DD hh:mm:ss")}
            <br />
            {x.content}
            <br />
            <EditTwoTone
              id={x.id}
              className="icon-format"
              onClick={() => showModal(x.id)}
            />
          </div>
        ) : null}
        {x.children ? leaveMessages(x.children, legth + 20) : null}
      </div>
    ))

  return (
    <div>
      <Modal
        forceRender
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {pushModel}
      </Modal>
      {leaveMessages(data, 100)}
    </div>
  )
}
export default LeaveMessage
