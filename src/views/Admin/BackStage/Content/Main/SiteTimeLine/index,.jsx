import { message, Timeline } from "antd"
import moment from "moment"
import React, { useEffect, useRef, useState } from "react"
import { GetPagingWebsiteEventLogAsync } from "../../../../../../utils/request"

const SiteTimeLine = () => {
  const scrollRef = useRef(0)
  const style = { fontSize: "30px", color: "burlywood" }
  const [page, setpage] = useState({ pageIndex: 1, pageSize: 10 })
  const [websiteEventLogs, setwebsiteEventLogs] = useState([])
  const handleOnScroll = (e) => {
    // const contentScrollTop = dom.scrollTop //滚动条距离顶部
    // const clientHeight = dom.clientHeight //可视区域
    // const scrollHeight = dom.scrollHeight //滚动条内容的总高度
    if (
      document.documentElement.scrollTop +
        document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      var a = { pageIndex: page.pageIndex + 1, pageSize: page.pageSize }
      setpage({ ...a })
    }
  }
  useEffect(() => {
    GetPagingWebsiteEventLogAsync(page.pageIndex, page.pageSize, "").then(
      (x) => {
        if (page.pageIndex > 1) {
          var c = websiteEventLogs.concat(x.data)
          setwebsiteEventLogs([...c])
        } else {
          setwebsiteEventLogs([...x.data])
        }
        if (!x.data || x.data.length === 0) {
          message.warning("没有数据了,到底了")
        }
      }
    )
    document.addEventListener("scroll", handleOnScroll, {
      passive: true
    })
    return () => {
      document.removeEventListener("scroll", handleOnScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page.pageIndex, page.pageSize])

  return (
    <div className="leaveMessage" ref={scrollRef}>
      <Timeline>
        {websiteEventLogs.map((x) => (
          <Timeline.Item style={style} key={x.id}>
            {moment(x.creationTime).format("YYYY-MM-DD")}:{x.content}
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  )
}

export default SiteTimeLine
