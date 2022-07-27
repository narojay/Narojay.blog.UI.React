import { Select } from "antd"
import { Option } from "antd/lib/mentions"
import React, { useEffect, useState } from "react"
import { withRouter } from "react-router-dom"
import { FuzzySearchPostAsync } from "../../../utils/request"
import styles from "./index.module.css"

const SearchBar = (props) => {
  const [data, setData] = useState([])
  const [result, setResult] = useState()
  const [value, setValue] = useState("")
  useEffect(() => {
    if (!value) {
      return
    }
    FuzzySearchPostAsync(value).then((x) => {
      if (x) {
        setData(x)
      }
    })
  }, [value])

  const handleSearch = (newValue) => {
    if (newValue) {
      setValue(newValue)
    } else {
      setData([])
    }
  }
  const options = data.map((d, index) => (
    <Option key={index} value={JSON.stringify(d)}>
      <div dangerouslySetInnerHTML={{ __html: d.name }}></div>
    </Option>
  ))
  const handleChange = (newValue) => {
    setResult(newValue)
  }
  return (
    <>
      <Select
        showSearch
        className={styles}
        onSelect={(e) => {
          const a = JSON.parse(e)
          props.history.push("post/" + a.id)
        }}
        allowClear
        placeholder={"查点啥呗？"}
        value={result}
        defaultActiveFirstOption={true}
        showArrow={false}
        filterOption={false}
        onSearch={handleSearch}
        onChange={handleChange}
        notFoundContent={"真没找到！"}
      >
        {options}
      </Select>
    </>
  )
}

export default withRouter(SearchBar)
