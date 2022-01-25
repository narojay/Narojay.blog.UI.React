import React, { useEffect, useState } from "react"
import { getLabelStatistics } from "../../../../../../utils/request"
import ReactEcharts from "echarts-for-react"
const Chart = () => {
  const [state, setState] = useState([])
  useEffect(() => {
    getLabelStatistics().then((x) => {
      var arr = []
      for (var key in x.data) {
        if (x.data.hasOwnProperty(key)) {
          arr.push({ name: key, value: x.data[key] })
        }
      }
      setState(arr)
    })
  }, [])

  return (
    <div className="aboutme-box">
      <ReactEcharts
        option={{
          series: [
            {
              type: "pie",
              data: state,
              roseType: "area"
            }
          ]
        }}
      />
    </div>
  )
}

export default Chart
