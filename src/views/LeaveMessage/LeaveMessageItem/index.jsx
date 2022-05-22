import React, { useState } from "react"
import moment from "moment"
import LeaveMessageReplyItem from "./LeaveMessageReplyItem"
import { pushLeaveMessages } from "../../../utils/request"
import { message } from "antd"
import "./index.css"
import { CommentOutlined } from "@ant-design/icons"
const LeaveMessageItem = (props) => {
  const { leaveMesaage } = props
  const [replyStatus, setreplyStatus] = useState(false)
  const [nickName, setnickName] = useState("")
  const [email, setEmail] = useState("")
  const [text, settext] = useState("")

  const submit = () => {
    console.log(nickName, email)
    if (!validate()) {
      return
    }
    pushLeaveMessages({
      content: text,
      nickName: nickName,
      email: email,
      parentId: leaveMesaage.id
    }).then((x) => {
      if (x) {
        message.success("回复成功！")
      } else {
        message.error("回复失败！请重试！")
      }
    })
  }
  const preShow = () => {
    console.log(1)
  }
  const validate = () => {
    if (Object.keys(nickName).length === 0) {
      message.warning("回复失败，昵称不能为空！")
      return false
    }
    if (Object.keys(email).length === 0) {
      message.warning("回复失败，邮箱不能为空！")
      return false
    }
    if (Object.keys(text).length === 0) {
      message.warning("回复失败，回复内容不能为空！")
      return false
    }
    return true
  }

  return (
    <div>
      <div key={leaveMesaage.id} className="le-content-box">
        <div className="le-warp">
          <img
            className="le-img"
            src="https://cdn.narojay.site/14018.gif"
            alt=""
          />
        </div>
        <div className="le-item-content">
          <div className="le-item1-title">
            <div className="le-item1-name"> {leaveMesaage.nickName} </div>
            {leaveMesaage.isMaster ? (
              <div className="le-item1-name-master">站长</div>
            ) : (
              <></>
            )}

            <div
              className="le-reply-btn"
              onClick={() => {
                setreplyStatus(!replyStatus)
              }}
            >
              <CommentOutlined />
            </div>
          </div>
          <div className="le-item1-content">
            {leaveMesaage.content}
            <div className="le-item1-time">
              {moment(leaveMesaage.creationTime).fromNow()}
            </div>
          </div>
        </div>
      </div>
      {replyStatus ? (
        <div className="le-replay-content">
          <div className="reply-to">回复给「{leaveMesaage.nickName}」</div>
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
                <div onClick={preShow} className="le-comment-box-item2">
                  预览
                </div>
                <div onClick={submit} className="le-comment-box-item1">
                  发布
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="le-child-content">
        {leaveMesaage.children.map((x) => (
          <LeaveMessageReplyItem replyMessage={x} />
        ))}
      </div>
    </div>
  )
}

export default LeaveMessageItem
