import { Layout, Menu } from "antd"
import { UserOutlined } from "@ant-design/icons"
import { Route } from "react-router-dom"
import Post from "../Post"
import AddPost from "../AddPost"
import LeaveMessage from "../LeaveMessage"
import Order from "../../App"
import PostList from "../PostList"
import "./index.css"

const { Content, Footer } = Layout
const { SubMenu } = Menu

function Video(props) {
  const aa = (value) => {
    console.log(value)

    const { key } = value
    console.log(props)
    props.history.push("/" + key)
  }
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <div className="logo" />
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="horizontal"
        onClick={aa}
      >
        <Menu.Item key="homepage" icon={<UserOutlined />}>
          Narojay's Blog
        </Menu.Item>
        <Menu.Item key="posts" icon={<UserOutlined />}>
          文章
        </Menu.Item>
        <Menu.Item key="leavemessage" icon={<UserOutlined />}>
          留言板
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="后台管理">
          <Menu.Item key="addpost">博客发布</Menu.Item>
        </SubMenu>
        <Menu.Item key="aboutme" icon={<UserOutlined />}>
          关于我
        </Menu.Item>
      </Menu>
      <Layout>
        <Content style={{ margin: "0 auto", width: "1000px" }}>
          <div className="image-limit">
            <Route path="/echartarea/1" component={Order} />
            <Route path="/posts" component={PostList} />
            <Route path="/post/:postId" component={Post} />
            <Route path="/addpost" component={AddPost} />
            <Route path="/leavemessage" component={LeaveMessage} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Blog ©2021 Created by Narojay
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Video
