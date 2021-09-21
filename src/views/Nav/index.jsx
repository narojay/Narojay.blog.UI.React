import "./index.css"
import React from "react"
import { NavLink } from "react-router-dom"

const Nav = (props) => {
  console.log(props)
  const navItem = [
    { id: 0, name: "文章", to: "/posts" },
    { id: 1, name: "留言板", to: "/leavemessage" },
    { id: 2, name: "关于我", to: "/aboutme" }
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
      <nav className="nav-pc theme-color">
        <div className="nav-content">
          <NavLink to="/home" className="home-btn common-hover">
            Narojay
          </NavLink>
          {navItem.map((item) => (
            <NavLink className="nav-btn" to={item.to} key={item.id}>
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
  return nacList
}

export default Nav
