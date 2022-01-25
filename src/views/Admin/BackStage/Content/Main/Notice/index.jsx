import React, { useEffect, useState } from "react"
import { getadminNotice } from "../../../../../../utils/request"
import "./index.css"

const Notice = () => {
  const [notice, setnotice] = useState("")

  useEffect(() => {
    getadminNotice().then((x) => {
      setnotice(x)
    })
  }, [])
  return (
    <div className="noticebox">
      <span className="test">公告</span>
      <span className="content">{notice}</span>
    </div>
  )
}

export default Notice
