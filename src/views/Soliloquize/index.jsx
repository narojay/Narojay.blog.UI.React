import React, { useEffect, useState } from "react"
import { GetSoliloquizedListAsync } from "../../utils/request"
import "./index.css"

const Soliloquize = () => {
  const [soliloquizes, setsoliloquizes] = useState([])
  useEffect(() => {
    GetSoliloquizedListAsync().then((x) => {
      setsoliloquizes(x)
    })
  }, [])

  return (
    <div className="soliloquize-box theme-color">
      {soliloquizes.map((x) => (
        <div key={x.id} className="soliloquize-item">
          <img
            className="si-img"
            src="https://cdn.narojay.site/static%2Fimg%2Ftest.jpg"
            alt=""
          />
          <div className="si-content">
            <div>{x.content}</div>
            <div className="si-creationtime">{x.creationTime}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Soliloquize
