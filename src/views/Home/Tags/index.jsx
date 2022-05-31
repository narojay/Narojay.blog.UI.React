import React, { useEffect, useState } from "react"
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
    <div className="tagcard">
      {tags.map((x) => (
        <div className="tagcard-item" key={x.id}>
          {x.name}
        </div>
      ))}
    </div>
  )
}

export default TagCard
