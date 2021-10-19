import React, { useEffect, useState } from "react"
import ReactEcharts from "echarts-for-react"
import { getLabelStatistics } from "../../utils/request"
import "./index.css"
const AboutMe = () => {
  const [state, setstate] = useState([])
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
  const getOption = () => {
    let option = {
      series: [
        {
          type: "pie",
          data: state,
          roseType: "area"
        }
      ]
    }
    return option
  }

  return (
    <div className="aboutme-box">
      <ReactEcharts
        option={getOption()}
        className="animate__animated animate__flip"
      />
    </div>
  )
}

export default AboutMe
