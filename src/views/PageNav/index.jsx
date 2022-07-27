import { Pagination } from "antd"
import React from "react"
import { Fade } from "react-reveal"

const PageNav = (props) => {
  const { currentPage, totalCount, setPage } = props
  return (
    <div>
      <Fade bottom>
        <Pagination
          current={currentPage}
          total={totalCount}
          defaultPageSize={10}
          onChange={(page) => setPage(page)}
        />
      </Fade>
    </div>
  )
}

export default PageNav
