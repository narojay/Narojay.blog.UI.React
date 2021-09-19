import React, { useState } from "react"
import http from "../../utils/http"

const LeaveMessage = () => {
  const [data, setData] = useState({ data: [], totalCount: 0 })
  React.useEffect(() => {
    http
      .post("messageboard/pages", { pageIndex: 1, pageSize: 10 })
      .then((res) => {
        setData(res.data)
      })
  }, [])
  console.log(data.data)
  const list = data.data.map((x) => <div key={x.id}>{x.content}</div>)
  return <div>1{list}</div>
}
export default LeaveMessage
