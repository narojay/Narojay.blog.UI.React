import { message } from "antd"
import React, { useState } from "react"
import { pushLeaveMessages } from "../../../utils/request"
import "./index.css"
const NewLeaveMessage = (props) => {
  const [nickName, setnickName] = useState("")
  const [email, setEmail] = useState("")
  const [text, settext] = useState("")
  const validate = () => {
    if (Object.keys(nickName).length === 0) {
      message.warning("留言失败，昵称不能为空！")
      return false
    }
    if (Object.keys(email).length === 0) {
      message.warning("留言失败，邮箱不能为空！")
      return false
    }
    if (Object.keys(text).length === 0) {
      message.warning("留言失败，回复内容不能为空！")
      return false
    }
    return true
  }
  const submit = () => {
    if (!validate()) {
      return
    }
    pushLeaveMessages({
      content: text,
      nickName: nickName,
      email: email,
      parentId: 0
    }).then((x) => {
      if (x) {
        message.success("留言成功！")
        props.updateLeaveMessage()
      } else {
        message.error("留言失败！请重试！")
      }
    })
  }
  return (
    <div className="le-replay-content">
      <div className="reply-to">新留言</div>
      <div className="le-input-box">
        <div>
          <img
            className="le-img"
            src="https://cdn.narojay.site/14018.gif"
            alt=""
          />
        </div>
        <div className="le-replay-content-box">
          <div className="le-input-info-main">
            <div className="le-input-info">
              <div className="le-input-key">昵称</div>
              <input
                onChange={(e) => {
                  setnickName(e.target.value)
                }}
                className="le-input-value"
                type="text"
                name=""
                id=""
                placeholder="昵称"
              />
            </div>
            <div className="le-input-info">
              <div className="le-input-key">邮箱</div>
              <input
                className="le-input-value"
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="text"
                name=""
                id=""
                placeholder="邮箱"
              />
            </div>
          </div>

          <div className="textareaBox">
            <textarea
              onChange={(e) => settext(e.target.value)}
              className="textarea"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="le-comment-box">
            <div onClick={submit} className="le-comment-box-item1">
              发布
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewLeaveMessage
