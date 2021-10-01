import { Comment, Avatar, Tooltip } from "antd"
import moment from "moment"
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
  const list = data.data.map((x) => (
    <Comment
      key={x.id}
      author="Han Solo"
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={<p>{x.content}</p>}
      datetime={
        <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  ))
  return <div>{list}</div>
}
export default LeaveMessage
