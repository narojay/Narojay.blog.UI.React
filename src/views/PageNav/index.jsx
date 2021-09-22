import { Pagination } from "antd"
import React from "react"

const PageNav = (props) => {
  const { currentPage, totalCount, setPage } = props
  return (
    <div>
      <Pagination
        current={currentPage}
        total={totalCount}
        defaultPageSize={10}
        onChange={(page) => setPage(page)}
      />
    </div>
  )
}

export default PageNav
