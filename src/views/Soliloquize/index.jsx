import React, { useEffect, useState } from "react"
import { GetSoliloquizedListAsync } from "../../utils/request"
// import { useLazyImg } from "../../utils/hooks/useLazyImg"
import "./index.css"

const Soliloquize = () => {
  const [soliloquizes, setsoliloquizes] = useState([])
  // const { imgRef, imgUrl } = useLazyImg(
  // "https://cdn.narojay.site/14018.gif",
  //   "https://cdn.jsdelivr.net/gh/lzxjack/cdn/img/202203302022741.webp"
  // )

  const [isLoading, setisLoading] = useState(false)
  useEffect(() => {
    GetSoliloquizedListAsync().then((x) => {
      setsoliloquizes(x)
      setisLoading(true)
    })
  }, [])

  return isLoading ? (
    <div className="soliloquize-box theme-color">
      {soliloquizes.map((x) => (
        <div key={x.id} className="soliloquize-item">
          <div>
            <img
              className="si-img"
              src={"https://cdn.narojay.site/14018.gif"}
              alt=""
            />
          </div>
          <div className="si-content">
            <div>{x.content}</div>
            <div className="si-creationtime">{x.creationTime}</div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <></>
  )
}

export default Soliloquize
