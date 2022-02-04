import "./index.css"
import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {
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
        <Link to="/blog/home" className="nav-btn common-hover">
          Narojay
        </Link>
        {navItem.map((item, index) => (
          <Link className="nav-btn" to={item.to} key={index}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
  return nacList
}

export default Nav
