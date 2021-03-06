import {
  Button,
  Input,
  Popconfirm,
  Select,
  Table,
  Tooltip,
  message
} from "antd"
import { Option } from "antd/lib/mentions"
import React, { useEffect, useRef, useState } from "react"
import {
  deleteArticleById,
  getLabelsAsync,
  getPostAdmin
} from "../../../../../../utils/request"
import styles from "./index.module.css"
import moment from "moment"
import Space from "antd/lib/space"
const Article = (props) => {
  const handleChange = (e) => {
    pagerequest.label = e
    setpagerequest({ ...pagerequest })
  }

  const title = useRef()
  const addpost = () => {
    props.history.push("/admin/addpost")
  }

  const deletePost = (e) => {
    deleteArticleById(e).then((x) => {
      if (x) {
        message.success("删除成功")
        const { page, size, title, label } = pagerequest
        getPostAdmin(page, size, title, label).then((x) => {
          setarticlesShow(x.data)
        })
        getLabelsAsync().then((x) => {
          setlist(x)
        })
      } else {
        message.warning("删除失败")
      }
    })
  }
  const modifyArticle = (e) => {
    props.history.push("/admin/addpost?articleId=" + e)
  }

  const query = () => {
    setloading(true)
    const titleContent = title.current.state.value
    const { page, size, label } = pagerequest
    getPostAdmin(page, size, titleContent, label).then((x) => {
      setarticlesShow(x.data)
      setloading(false)
    })
  }
  const [articlesShow, setarticlesShow] = useState([])
  const [list, setlist] = useState([])
  const [pagerequest, setpagerequest] = useState({
    page: 1,
    size: 10,
    title: null,
    label: null
  })
  const [loading, setloading] = useState(false)
  useEffect(() => {
    setloading(true)
    const { page, size, title, label } = pagerequest

    getPostAdmin(page, size, title, label).then((x) => {
      setarticlesShow(x.data)
      setloading(false)
    })
    getLabelsAsync().then((x) => {
      setlist(x)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const columns = [
    {
      title: "标题",
      dataIndex: "title",
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
      title: "标签",
      dataIndex: "label",
      key: "id",
      render: (x) => <strong>{x}</strong>
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
            onConfirm={() => deletePost(x.id)}
            okText="确认"
            cancelText="取消"
          >
            <Button type="primary" danger>
              删除
            </Button>
          </Popconfirm>
          <Button type="primary" onClick={() => modifyArticle(x.id)}>
            修改
          </Button>
        </Space>
      )
    }
  ]

  return (
    <div>
      <div className={styles.searchbox}>
        <Button
          onClick={addpost}
          className={styles.articlebutton}
          type="primary"
        >
          写博客
        </Button>
        <Input
          placeholder="Basic usage"
          ref={title}
          className={styles.articleinput}
        />
        <Select
          defaultValue="lucy"
          className={styles.articlebutton}
          onChange={handleChange}
        >
          {list?.map((x, y) => (
            <Option key={y} value={x}>
              {x}
            </Option>
          ))}
        </Select>
        <Tooltip title="搜索">
          <Button
            type="primary"
            onClick={query}
            loading={loading}
            className={styles.articlebutton}
          >
            搜索
          </Button>
        </Tooltip>
      </div>
      <Table
        loading={loading}
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
        dataSource={articlesShow}
        rowKey={(columns) => columns._id}
        showSorterTooltip={false}
      ></Table>
    </div>
  )
}

export default Article
