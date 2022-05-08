import React, { useEffect } from "react"
import { withRouter } from "react-router-dom"

const ScrollToTop = (prevProps) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [prevProps])

  return <div>index</div>
}
export default withRouter(ScrollToTop)
