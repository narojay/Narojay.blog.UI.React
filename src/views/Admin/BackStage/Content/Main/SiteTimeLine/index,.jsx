import { Timeline } from "antd"
import React from "react"

const SiteTimeLine = () => {
  const style = { fontSize: "30px", color: "burlywood" }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
        backgroundColor: "rgb(11, 24, 31)",
        minHeight: "100vh",
        borderRadius: "20px",
        fontSize: "40px"
      }}
    >
      <Timeline>
        <Timeline.Item style={style}>Create a services site</Timeline.Item>
        <Timeline.Item style={style}>
          Solve initial network problems 2015-09-01
        </Timeline.Item>
        <Timeline.Item style={style}>
          Technical testing 2015-09-01
        </Timeline.Item>
        <Timeline.Item style={style}>
          Network problems being solved 2015-09-01
        </Timeline.Item>
      </Timeline>
    </div>
  )
}

export default SiteTimeLine
