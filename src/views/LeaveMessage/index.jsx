import moment from "moment"
import React, { useEffect, useState } from "react"
import { getLeaveMessages, pushLeaveMessages } from "../../utils/request"
import "./index.css"
import { EditTwoTone } from "@ant-design/icons"
import { Form, Input, Modal, Pagination } from "antd"
const LeaveMessage = () => {
  const [data, setData] = useState([])
  const [loading, setloading] = useState(true)
  const [visible, setVisible] = React.useState(false)
  const [confirmLoading, setConfirmLoading] = React.useState(false)
  const [parentId, setParentId] = React.useState(0)
  const [pageDto, setPageDto] = useState({
    currentPage: 1,
    pageSize: 10,
    totalCount: 0,
    disable: false
  })

  useEffect(() => {
    let unmounted = true
    getLeaveMessages(1, 10).then((x) => {
      if (unmounted) {
        setPageDto({
          currentPage: 1,
          pageSize: 10,
          totalCount: x.totalCount,
          disable: true
        })
        setData(x.data)
        setloading(false)
      }
    })
    return () => {
      unmounted = false
      console.log("first")
    }
  }, [])
  const page =
    pageDto.disable === true ? (
      <Pagination
        current={pageDto.currentPage}
        total={pageDto.totalCount}
        defaultPageSize={pageDto.pageSize}
        onChange={(page) => setPage(page)}
      />
    ) : (
      <div></div>
    )

  const setPage = (page) => {
    pageDto.currentPage = page
    getLeaveMessages(page, pageDto.pageSize).then((x) => {
      const { data } = x
      setData(data)
      pageDto.currentPage = page
      setPageDto({ ...pageDto })
    })
  }
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
    setVisible(false)
    setConfirmLoading(false)
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
        <Input.TextArea />
      </Form.Item>
    </Form>
  )

  const leaveMessages = (data, legth) =>
    data.map((x) => (
      <div key={x.id} className="leaveMessage-container">
        {x.id ? (
          <div style={{ paddingLeft: legth }} key={x.id}>
            <span className="theme-container">
              来自{x.isMaster ? "管理员" : "男酮"}: {x.nickName} 的留言 #
              {moment(x.creationTime).format("YYYY-MM-DD hh:mm:ss")}
            </span>
            <br />

            <Input.TextArea
              placeholder="Autosize height with minimum and maximum number of lines"
              autoSize={{ minRows: 2, maxRows: 6 }}
              value={x.content}
              style={{ width: "500px", marginLeft: "30px" }}
            />
            <EditTwoTone
              id={x.id}
              className="icon-format"
              onClick={() => showModal(x.id)}
            />
          </div>
        ) : null}
        {x.children ? <div>{leaveMessages(x.children, legth + 10)}</div> : null}
      </div>
    ))
  if (loading) {
    return <div></div>
  } else {
    return (
      <div className="leaveMessage">
        <Modal
          forceRender
          title="回复"
          visible={visible}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          {pushModel}
        </Modal>
        <div className="leaveMessage-box">{leaveMessages(data, 5)}</div>
        <div className="leaveMessage-page-box">{page}</div>
      </div>
    )
  }
}
export default LeaveMessage
