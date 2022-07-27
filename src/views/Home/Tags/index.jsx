import QueueAnim from "rc-queue-anim"
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
    <QueueAnim delay={400} type={"right"}>
      <div key={998} className="tagcard">
        {tags.map((x) => (
          <div className="tagcard-item" key={x.id}>
            {x.name}
          </div>
        ))}
      </div>
    </QueueAnim>
  )
}

export default TagCard
