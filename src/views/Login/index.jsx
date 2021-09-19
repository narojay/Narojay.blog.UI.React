import React, { Component } from "react"
import "./index.css"
import { Form, Input, Checkbox, Button } from "antd"
import { withRouter } from "react-router-dom"
import tsIcon1 from "./pexels-christian-heitz-842711.jpg"
import tsIcon2 from "./R-C.jpg"
import tsIcon3 from "./pexels-visually-us-1643409.jpg"

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      url: [tsIcon1, tsIcon2, tsIcon3]
    }
  }

  onSubmit = (values) => {
    this.props.history.push("/1234")
    this.setState({ urls: tsIcon2 })
  }

  // handClick = () => {
  //   console.log(this.state)
  //   http.get("test").then((res) => {
  //     console.log(res.data.data.age)
  //     sessionStorage.setItem("hj", res.data.data.age)
  //     message.success("登录成功")
  //     this.props.history.push("/video/test1")
  //   })
  // }
  changeTheme = () => {
    let newIndex = this.state.index
    if (newIndex >= 2) {
      newIndex = 0
    } else {
      newIndex++
    }
    this.setState({
      index: newIndex
    })
    console.log(this.state)
  }

  render() {
    const { index, url } = this.state
    const ttt = {
      background: `url(${url[index]})  0 / cover fixed`,
      height: "100%",
      width: "100%",
      float: "left"
    }
    // const { ttt } = this.state
    const layout = { labelCol: { span: 8 }, wrapperCol: { span: 8 } }
    return (
      <div style={ttt}>
        <div className="login-container">
          <div className="login">
            <Form onFinish={this.handClick}>
              <Form.Item
                label="用户名"
                name="username"
                rules={[
                  { required: true, message: "Please input you username!" }
                ]}
                {...layout}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="密码"
                name="password"
                {...layout}
                rules={[
                  { required: true, message: "Please input you username!" }
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>记住密码</Checkbox>
              </Form.Item>

              <div className="btn-flex">
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
                <Button type="primary" htmlType="submit">
                  注册
                </Button>
                <Button type="primary" onClick={this.changeTheme}>
                  切换主题
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Login)
