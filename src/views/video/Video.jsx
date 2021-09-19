import { Layout, Menu, Breadcrumb } from "antd"
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined
} from "@ant-design/icons"
import React, { useState } from "react"
import { Route } from "react-router-dom"
import Post from "../Post"
import AddPost from "../AddPost"
import LeaveMessage from "../LeaveMessage"
import Order from "../../App"

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

function Video(props) {
  const [collapsed, setCollapsed] = useState(false)

  const aa = (value) => {
    console.log(value)

    const { key } = value
    console.log(props)
    props.history.push("/video/" + key)
  }
  const onCollapse = (value) => {
    setCollapsed(value)
    console.log(collapsed)
  }
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={"200px"} collapsible onCollapse={onCollapse}>
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          onClick={aa}
        >
          <Menu.Item key="echartarea/1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            y Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="leavemessage">留言板</Menu.Item>
            <Menu.Item key="post">博客文章</Menu.Item>
            <Menu.Item key="addpost">博客发布</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>

          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Route path="/video/echartarea/1" component={Order} />
            <Route path="/video/post/:postId" component={Post} />
            <Route path="/video/addpost" component={AddPost} />
            <Route path="/video/leavemessage" component={LeaveMessage} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Video
