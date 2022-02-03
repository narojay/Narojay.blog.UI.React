import "./index.css"
import React from "react"
import { NavLink } from "react-router-dom"

const Nav = (props) => {
  const navItem = [
    { id: 0, name: "文章", to: "/blog/posts" },
    { id: 1, name: "留言板", to: "/blog/leavemessage" },
    { id: 2, name: "建站", to: "/blog/sitetimeline" },
    { id: 3, name: "关于我", to: "/blog/aboutme" }
  ]
  // const secondNavItem = [
  //   { id: 1, name: "找文章", to: "/articles" },
  //   { id: 2, name: "分类", to: "/classes" },
  //   { id: 3, name: "标签", to: "/tags" }
  // ]
  // const aa = (value) => {
  //   const { key } = value
  //   props.history.push("/" + key)
  // }
  const nacList = (
    <div>
      <div className="nav-pc theme-color animate__animated animate__bounceInRight">
        <NavLink to="/blog/home" className="nav-btn common-hover">
          Narojay
        </NavLink>
        {navItem.map((item) => (
          <NavLink className="nav-btn" to={item.to} key={item.id}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  )
  return nacList
}

export default Nav
