import React from "react"
import "./index.css"
import { HomeOutlined, LoginOutlined } from "@ant-design/icons"
import { Popconfirm } from "antd"
import { withRouter } from "react-router-dom"
const Header = (props) => {
  const loginOut = () => {
    localStorage.clear()
    props.history.push("admin")
  }
  return (
    <div className="HeaderBox">
      <a href={"/"} className="blogBtn" rel="noreferrer">
        <HomeOutlined />
      </a>
      <Popconfirm
        className="logoutBtn"
        placement="bottomRight"
        title="确定要退出登录吗？"
        onConfirm={loginOut}
        okText="Yes"
        cancelText="No"
      >
        <LoginOutlined />
      </Popconfirm>
    </div>
  )
}

export default withRouter(Header)
