import React, { useEffect, useState } from "react"
import { GetSoliloquizedListAsync } from "../../utils/request"
import { useLazyImg } from "../../utils/hooks/useLazyImg"
import "./index.css"

const Soliloquize = () => {
  const [soliloquizes, setsoliloquizes] = useState([])
  const { imgRef, imgUrl } = useLazyImg(
    "https://cdn.narojay.site/14018.gif",
    "https://cdn.jsdelivr.net/gh/lzxjack/cdn/img/202203302022741.webp"
  )

  useEffect(() => {
    GetSoliloquizedListAsync().then((x) => {
      setsoliloquizes(x)
    })
  }, [])

  return (
    <div ref={imgRef} className="soliloquize-box theme-color">
      {soliloquizes.map((x) => (
        <div key={x.id} className="soliloquize-item">
          <div>
            <img className="si-img" src={imgUrl} alt="" />
          </div>
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
