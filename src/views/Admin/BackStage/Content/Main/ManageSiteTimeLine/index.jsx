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
  RemoveWebsiteEventLogAsync,
  UpdateWebsiteEventLogAsync
} from "../../../../../../utils/request"

const ManageSiteTimeLine = () => {
  const [pageDto] = useState({ pageindex: 1, pageSize: 10 })
  const [websiteEventLog, setwebsiteEventLog] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [visible, setvisible] = useState(false)
  const [modifyVisible, setmodifyVisible] = useState(false)
  const content = useRef()
  const [modifyContent, setmodifyContent] = useState({ id: 0, content: "" })
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
  const modifyContentAsync = (x) => {
    console.log(x)
    setmodifyVisible(true)
    setmodifyContent({ id: x.id, content: x.content })
  }

  const handleModifyCancel = () => {
    setmodifyVisible(false)
    setmodifyContent({ id: 0, content: "" })
  }
  const onFinish1 = (e) => {
    if (e.id) {
      UpdateWebsiteEventLogAsync(e).then((x) => {
        if (x === true) {
          GetPagingWebsiteEventLogAsync(
            pageDto.pageindex,
            pageDto.pageSize,
            content.current.state.value ?? ""
          ).then((x) => {
            setwebsiteEventLog(x.data)
            setmodifyVisible(false)
          })
        }
      })
    } else {
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
      title: "日志内容",
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
          <Button type="primary" onClick={() => modifyContentAsync(x)}>
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

  const modifyForm = () => {
    return (
      <Form
        name="changePasswordForm"
        onFinish={onFinish1}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        ref={formRef}
      >
        <Form.Item label="Id" name="id" initialValue={modifyContent.id}>
          <Input disabled={true} />
        </Form.Item>
        <Form.Item
          label="修改建站日志内容"
          name="content"
          initialValue={modifyContent.content}
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    )
  }
  return (
    <div>
      <>
        {visible && (
          <Modal
            title="新增建站日志"
            visible={visible}
            onOk={onFinish}
            onCancel={handleCancel}
          >
            {changePasswordForm()}
          </Modal>
        )}
      </>
      <>
        {modifyVisible && (
          <Modal
            title="修改建站日志"
            visible={modifyVisible}
            onOk={onFinish}
            onCancel={handleModifyCancel}
          >
            {modifyForm()}
          </Modal>
        )}
      </>

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
