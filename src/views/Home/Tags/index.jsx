import React, { useEffect, useState } from "react"
import { Fade } from "react-reveal"
import { GetTagsAsync } from "../../../utils/request"
import "./index.css"
const TagCard = () => {
  const [tags, setTags] = useState([])
  useEffect(() => {
    GetTagsAsync().then((x) => {
      setTags(x)
    })
  }, [])

  return (
    <Fade right>
      <div key={998} className="tagcard">
        {tags.map((x) => (
          <div className="tagcard-item" key={x.id}>
            {x.name}
          </div>
        ))}
      </div>
    </Fade>
  )
}

export default TagCard
