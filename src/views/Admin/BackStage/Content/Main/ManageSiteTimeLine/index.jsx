import {
  Button,
  Form,
  Input,
  Modal,
  Popconfirm,
  Space,
  Table,
  Tooltip
} from "antd"
import moment from "moment"
import React, { useEffect, useRef, useState } from "react"
import {
  AddWebsiteEventLogAsync,
  GetPagingWebsiteEventLogAsync,
  RemoveWebsiteEventLogAsync
} from "../../../../../../utils/request"

const ManageSiteTimeLine = () => {
  const [pageDto] = useState({ pageindex: 1, pageSize: 10 })
  const [websiteEventLog, setwebsiteEventLog] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [visible, setvisible] = useState(false)
  const content = useRef()
  const formRef = useRef()
  const deleteWebsiteEventLog = (id) => {
    RemoveWebsiteEventLogAsync(id).then((e) => {
      if (e === true) {
        GetPagingWebsiteEventLogAsync(
          pageDto.pageindex,
          pageDto.pageSize,
          content.current.state.value ?? ""
        ).then((x) => {
          setwebsiteEventLog(x.data)
        })
      }
    })
  }
  const onFinish1 = (e) => {
    AddWebsiteEventLogAsync(e.content).then((x) => {
      if (x === true) {
        GetPagingWebsiteEventLogAsync(
          pageDto.pageindex,
          pageDto.pageSize,
          content.current.state.value ?? ""
        ).then((x) => {
          setwebsiteEventLog(x.data)
          setvisible(false)
        })
      }
    })
  }
  const onFinish = () => {
    formRef.current.submit()
  }
  const addWebsiteEventLog = () => {
    setvisible(true)
  }
  const handleCancel = () => {
    setvisible(false)
  }
  const fazzyQueryWebsiteEventLog = () => {
    GetPagingWebsiteEventLogAsync(
      pageDto.pageindex,
      pageDto.pageSize,
      content.current.state.value ?? ""
    ).then((x) => {
      setwebsiteEventLog(x.data)
      setisLoading(false)
    })
    console.log(content)
  }
  useEffect(() => {
    GetPagingWebsiteEventLogAsync(
      pageDto.pageindex,
      pageDto.pageSize,
      content.current.state.value ?? ""
    ).then((x) => {
      setwebsiteEventLog(x.data)
      setisLoading(false)
    })
  }, [pageDto.pageSize, pageDto.pageindex])

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (x) => <strong>{x}</strong>
    },
    {
      title: "标题",
      dataIndex: "content",
      key: "id",
      render: (x) => <strong>{x}</strong>
    },
    {
      title: "创建时间",
      dataIndex: "creationTime",
      key: "id",
      render: (x) => <strong>{moment(x).format("YYYY-MM-DD HH:mm:ss")}</strong>
    },
    {
      title: "操作",
      key: "id",
      render: (x) => (
        <Space size="middle">
          <Popconfirm
            title={
              <>
                确认要删除文章:<b>{x.title}</b>吗？
              </>
            }
            onConfirm={() => deleteWebsiteEventLog(x.id)}
            okText="确认"
            cancelText="取消"
          >
            <Button type="primary" danger>
              删除
            </Button>
          </Popconfirm>
          <Button type="primary" onClick={() => {}}>
            修改
          </Button>
        </Space>
      )
    }
  ]
  const changePasswordForm = () => {
    return (
      <Form
        name="changePasswordForm"
        onFinish={onFinish1}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        ref={formRef}
      >
        <Form.Item
          label="建站日志内容"
          name="content"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    )
  }
  return (
    <div>
      <Modal
        title="更改密码"
        visible={visible}
        onOk={onFinish}
        onCancel={handleCancel}
      >
        {changePasswordForm()}
      </Modal>
      <div>
        <Input placeholder="搜索建站日志内容" ref={content} />
        <Tooltip title="搜索">
          <Button
            type="primary"
            onClick={fazzyQueryWebsiteEventLog}
            loading={isLoading}
          >
            搜索
          </Button>
        </Tooltip>

        <Tooltip title="添加">
          <Button
            type="primary"
            onClick={addWebsiteEventLog}
            loading={isLoading}
          >
            添加
          </Button>
        </Tooltip>
      </div>
      <Table
        loading={isLoading}
        size="middle"
        className="Table"
        bordered
        pagination={{
          position: ["bottomCenter"],
          defaultPageSize: 11,
          hideOnSinglePage: true,
          showTitle: false,
          size: ["small"]
        }}
        columns={columns}
        dataSource={websiteEventLog}
        rowKey={(columns) => columns._id}
        showSorterTooltip={false}
      ></Table>
    </div>
  )
}

export default ManageSiteTimeLine
