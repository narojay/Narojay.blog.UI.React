import React, { useState } from "react"
import ReactECharts from "echarts-for-react"
import http from "../../utils/http"
const EchartArea = (props) => {
  const [data, setData] = useState([])
  React.useEffect(() => {
    http.get("testinfo").then((res) => {
      console.log(res.data)
      const a = res.data
      setData(a)
    })
  }, [])
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "category",
      data: [...data]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [...data],
        type: "line",
        smooth: true
      }
    ],
    tooltip: {
      trigger: "axis"
    }
  }
  return <ReactECharts option={options} />
}
export default EchartArea
