import { Button, Input, Select, Table } from "antd"
import { Option } from "antd/lib/mentions"
import React, { useEffect, useRef, useState } from "react"
import { getPostAdmin } from "../../../../../../utils/request"
import styles from "./index.module.css"
import moment from "moment"
const Article = (props) => {
  const handleChange = (e) => {
    pagerequest.label = e
    setpagerequest({ ...pagerequest })
  }
  const title = useRef()
  const addpost = () => {
    props.history.push("/admin/addpost")
  }

  const query = () => {
    const titleContent = title.current.state.value
    const { page, size, label } = pagerequest
    getPostAdmin(page, size, titleContent, label).then((x) => {
      setarticlesShow(x.data)
    })
  }
  const [articlesShow, setarticlesShow] = useState([])
  const [pagerequest, setpagerequest] = useState({
    page: 1,
    size: 10,
    title: null,
    label: null
  })
  useEffect(() => {
    const { page, size, title, label } = pagerequest
    getPostAdmin(page, size, title, label).then((x) => {
      setarticlesShow(x.data)
    })
  }, [pagerequest])

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
          <Option value=".net">Jack</Option>
          <Option value="java">Lucy</Option>
          <Option value="生活记录">生活记录</Option>
        </Select>
        <Button className={styles.articlebutton} type="primary" onClick={query}>
          搜索
        </Button>
      </div>
      <Table
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
