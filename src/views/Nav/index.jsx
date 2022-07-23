import "./index.css"
import React from "react"
import { NavLink, withRouter } from "react-router-dom"

const Nav = () => {
  const navItem = [
    { id: 0, name: "文章", to: "/posts" },
    { id: 1, name: "说说", to: "/soliloquize" },
    { id: 2, name: "留言板", to: "/leavemessage" },
    { id: 3, name: "建站", to: "/sitetimeline" },
    { id: 4, name: "关于我", to: "/aboutme" }
  ]
  const nacList = (
    <div>
      <div className="nav-pc">
        <NavLink to="/" className="nav-btn common-hover">
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

export default withRouter(Nav)
