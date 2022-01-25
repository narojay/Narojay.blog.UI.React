import moment from "moment"
import React, { useState } from "react"
import { useEffect } from "react"
import { visitorAvatar } from "../../../../../../utils/constant"
import "./index.css"
const Welcome = () => {
  const [name, setName] = useState("游客")
  const [avatar] = useState(visitorAvatar)
  const [timeText, setTimeText] = useState("")
  useEffect(() => {
    const hour = moment().hours()
    const timeText =
      hour < 6
        ? "凌晨好"
        : hour < 9
        ? "早上好"
        : hour < 11
        ? "上午好"
        : hour < 13
        ? "中午好"
        : hour < 17
        ? "下午好"
        : hour < 19
        ? "傍晚好"
        : hour < 22
        ? "晚上好"
        : "夜深了"
    setTimeText(timeText)
    setName("游客")
  }, [])
  return (
    <>
      <div className="itembox">
        <img src={avatar} alt="头像" className="home-avatar" />
        <span className="welcomeTitle">
          {timeText}
          <span className="username">{name}</span>
        </span>
      </div>
    </>
  )
}

export default Welcome
