import React from "react"
import Content from "./Content"
import Nav from "./Nav"
import "./index.css"

const BackStage = (props) => {
  return (
    <div className="AdminBox">
      <div className="navBack"></div>
      <Nav />
      <Content />
    </div>
  )
}

export default BackStage
