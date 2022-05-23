import { Divider, Pagination } from "antd"
import React, { useEffect, useState } from "react"
import { getLeaveMessages } from "../../utils/request"
import "./index.css"
import LeaveMessageItem from "./LeaveMessageItem"
import NewLeaveMessage from "./NewLeaveMessage"
const LeaveMessage = () => {
  const [data, setData] = useState([])
  const [loading, setloading] = useState(true)
  const [pageDto, setPageDto] = useState({
    currentPage: 1,
    pageSize: 10,
    totalCount: 0,
    disable: false
  })
  useEffect(() => {
    let unmounted = true
    getLeaveMessages(1, 10).then((x) => {
      if (unmounted) {
        setPageDto({
          currentPage: 1,
          pageSize: 10,
          totalCount: x.totalCount,
          disable: true
        })
        setData(x.data)
        setloading(false)
      }
    })
    return () => {
      unmounted = false
    }
  }, [])

  const page =
    pageDto.disable === true ? (
      <Pagination
        current={pageDto.currentPage}
        total={pageDto.totalCount}
        defaultPageSize={pageDto.pageSize}
        onChange={(page) => setPage(page)}
      />
    ) : (
      <div></div>
    )

  const setPage = (page) => {
    pageDto.currentPage = page
    getLeaveMessages(page, pageDto.pageSize).then((x) => {
      const { data } = x
      setData(data)
      pageDto.currentPage = page
      setPageDto({ ...pageDto })
    })
  }

  if (loading) {
    return <div></div>
  } else {
    return (
      <div className="leaveMessage">
        <div className="leaveMessage-box">
          <NewLeaveMessage
            updateLeaveMessage={() => setPage(pageDto.currentPage)}
          />
          <Divider plain dashed={true} className="diverclass">
            Text
          </Divider>
          {data.map((x) => (
            <LeaveMessageItem
              leaveMesaage={x}
              updateLeaveMessage={() => setPage(pageDto.currentPage)}
            />
          ))}
        </div>
        <div className="leaveMessage-page-box">{page}</div>
      </div>
    )
  }
}
export default LeaveMessage
