import { LoadingOutlined } from "@ant-design/icons"
import { message, Spin, Timeline } from "antd"
import moment from "moment"
import React, { useEffect, useRef, useState } from "react"
import { GetPagingWebsiteEventLogAsync } from "../../../../../../utils/request"

const SiteTimeLine = () => {
  const scrollRef = useRef(null)
  const pageRef = useRef(null)
  const style = { fontSize: "30px", color: "burlywood" }
  const [page, setpage] = useState({ pageIndex: 1, pageSize: 10 })
  const [loading, setLoading] = useState(false)
  const [websiteEventLogs, setwebsiteEventLogs] = useState([])
  const handleOnScroll = (e) => {
    // const contentScrollTop = dom.scrollTop //滚动条距离顶部
    // const clientHeight = dom.clientHeight //可视区域
    // const scrollHeight = dom.scrollHeight //滚动条内容的总高度
    if (
      document.documentElement.scrollTop +
        document.documentElement.clientHeight >=
        document.documentElement.scrollHeight &&
      !loading
    ) {
      setLoading(true)
      GetPagingWebsiteEventLogAsync(
        pageRef.current.pageIndex + 1,
        page.pageSize,
        ""
      ).then((x) => {
        if (!x.data || x.data.length === 0) {
          message.info("到底了")
        } else {
          if (pageRef.current.pageIndex + 1 > 1) {
            var c = scrollRef.current.concat(x.data)

            setwebsiteEventLogs([...c])
          } else {
            setwebsiteEventLogs([...x.data])
          }
        }
        var a = {
          pageIndex: pageRef.current.pageIndex + 1,
          pageSize: pageRef.current.pageSize
        }
        setpage({ ...a })
        setLoading(false)
      })
    }
  }
  useEffect(() => {
    setLoading(true)
    GetPagingWebsiteEventLogAsync(page.pageIndex, page.pageSize, "").then(
      (x) => {
        if (!x.data || x.data.length === 0) {
        } else {
          if (page.pageIndex > 1) {
            var c = websiteEventLogs.concat(x.data)

            setwebsiteEventLogs([...c])
          } else {
            setwebsiteEventLogs(x.data)
          }
        }
        setLoading(false)
      }
    )
    document.addEventListener("scroll", handleOnScroll, {
      passive: true
    })
    return () => {
      document.removeEventListener("scroll", handleOnScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    scrollRef.current = websiteEventLogs
  }, [websiteEventLogs])

  useEffect(() => {
    pageRef.current = page
  }, [page])
  return (
    <div className="leaveMessage">
      {websiteEventLogs.length === 0 ? (
        <div style={{ height: "30px" }}>
          <Spin
            indicator={<LoadingOutlined />}
            size="large"
            spinning={loading}
            tip="加载中..."
          ></Spin>
        </div>
      ) : (
        <>
          <Timeline>
            {websiteEventLogs.map((x) => (
              <Timeline.Item style={style} key={x.id}>
                {moment(x.creationTime).format("YYYY-MM-DD")}:{x.content}
              </Timeline.Item>
            ))}
          </Timeline>
          {page.pageIndex >= 1 ? (
            <div style={{ height: "30px" }}>
              <Spin
                indicator={<LoadingOutlined />}
                size="large"
                spinning={loading}
                tip="加载中..."
              ></Spin>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  )
}

export default SiteTimeLine
