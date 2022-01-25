import moment from "moment"
import React, { useState } from "react"
import { useEffect } from "react"
import { getUserIp } from "../../../../../../utils/request"
import "./index.css"
const Infor = () => {
  const [state, setstate] = useState("")
  useEffect(() => {
    getUserIp().then((x) => {
      setstate(x)
    })
  }, [])
  return (
    <div className="infoBox">
      <span className="ipbox">{moment().format("YYYY年MM月DD日")}</span>
      <span className="datebox">{state}</span>
    </div>
  )
}

export default Infor
