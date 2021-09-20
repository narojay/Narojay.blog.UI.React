import { List, Avatar } from "antd"
import React, { useEffect, useState } from "react"
import { GetPostList } from "../../utils/request"

const PostList = (props) => {
  const [state, setstate] = useState([])

  useEffect(() => {
    GetPostList(1, 10).then((x) => {
      console.log(x)
      setstate(x.data)
    })
  }, [])
  const GetDetail = (id) => {
    console.log(id)
    console.log(props)
    props.history.push("post/" + id)
  }

  const list1 = (
    <List
      itemLayout="horizontal"
      dataSource={state}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={item.title}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            onClick={() => GetDetail(item.id)}
            key={item.id}
          />
        </List.Item>
      )}
    />
  )
  return list1
}

export default PostList
