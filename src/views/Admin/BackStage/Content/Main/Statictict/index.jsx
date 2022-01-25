import React, { useEffect, useState } from "react"
import { GetStatisticDtoAsync } from "../../../../../../utils/request"
import styles from "./index.module.css"
const Statictict = (props) => {
  const [statisticDto, setstatisticDto] = useState({})

  const update = (x) => {
    sessionStorage.setItem("list", JSON.stringify(x))
    var { name, num } = x.filter((x) => x.name === props.type)[0]
    switch (props.type) {
      case "post": {
        setstatisticDto({
          name: name,
          num: num
        })
        break
      }
      case "label": {
        setstatisticDto({
          name: name,
          num: num
        })
        break
      }
      default: {
        setstatisticDto({
          name: name,
          num: num
        })
      }
    }
  }
  useEffect(() => {
    var model = sessionStorage.getItem("list")
    if (model) {
      update([...JSON.parse(model)])
    } else {
      GetStatisticDtoAsync().then((x) => {
        update(x)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.staticbox}>
      {statisticDto.name}:{statisticDto.num}
    </div>
  )
}

export default Statictict
