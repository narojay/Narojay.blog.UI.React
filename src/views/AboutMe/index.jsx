import React, { useEffect, useState } from "react"
import ReactEcharts from "echarts-for-react"
import { getLabelStatistics } from "../../utils/request"
import "./index.css"
import { Switch } from "antd"
const AboutMe = () => {
  const [state, setstate] = useState([])
  const [aboutme, setaboutme] = useState(true)

  const change = () => {
    setaboutme(!aboutme)
  }
  const aboutsite = (
    <div className="aboutme-content-box">
      <ReactEcharts
        // eslint-disable-next-line no-use-before-define
        option={{
          series: [
            {
              type: "pie",
              data: state,
              roseType: "area"
            }
          ]
        }}
        className="animate__animated animate__flip"
      />
    </div>
  )
  const aboutmehim = <div>我是一名coder</div>
  useEffect(() => {
    getLabelStatistics().then((x) => {
      var arr = []
      for (var key in x.data) {
        if (x.data.hasOwnProperty(key)) {
          arr.push({ name: key, value: x.data[key] })
        }
      }
      setstate(arr)
    })
  }, [])
  return (
    <>
      <div className="aboutme-main-box">
        <div className="aboutme-title-box">
          <div className="about-site-first">关于本站</div>
          <Switch defaultChecked onChange={change} />
          <div className="about-site-second">关于我</div>
        </div>
        {aboutme ? aboutsite : aboutmehim}
      </div>
    </>
  )
}

export default AboutMe
