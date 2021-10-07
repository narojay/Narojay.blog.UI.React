import React from "react"

function BackStage(props) {
  const a = () => {
    localStorage.clear()
    props.history.push("/admin")
  }
  return (
    <div>
      123
      <button onClick={a}>删除</button>
    </div>
  )
}

export default BackStage
