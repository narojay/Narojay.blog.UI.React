import { message } from "antd"
import React, { useState } from "react"
import { loginAsync } from "../../../utils/request"
import "./index.css"
const Login = (props) => {
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const login = () => {
    loginAsync(email, pwd).then((x) => {
      if (x.data === "") {
        message.info("用户名或者密码错误！")
      } else {
        localStorage.setItem("jwt", x.data)
        props.history.push("admin/backstage")
      }
    })
  }
  return (
    <div className="admin-main">
      <div className="loginBox">
        <div className="EmailBox">
          <div className="Email">邮箱</div>
          <input
            type="text"
            className="inputEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="pwdBox">
          <div className="pwd">密码</div>
          <input
            type="password"
            className="inputpwd"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>

        <div className="loginBtn" onClick={login}>
          登录
        </div>
        <div className="visitorBtn">游客</div>
      </div>
    </div>
  )
}

export default Login
