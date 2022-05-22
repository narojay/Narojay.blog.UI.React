import React from "react"
import moment from "moment"
const LeaveMessageReplyItem = (props) => {
  const { replyMessage } = props
  return replyMessage.id ? (
    <div className="le-content-box" key={replyMessage.id}>
      <div className="le-warp">
        <img
          className="le-img"
          src="https://cdn.narojay.site/static%2Fimg%2Ftest.jpg"
          alt=""
        />
      </div>

      <div className="le-item-content">
        <div className="le-item1-title">
          <div className="le-item1-name"> {replyMessage.nickName} </div>

          {replyMessage.isMaster ? (
            <div className="le-item1-name-master">站长</div>
          ) : (
            <></>
          )}
        </div>
        <div className="le-item1-content">
          {replyMessage.content}
          <div className="le-item1-time">
            {moment(replyMessage.creationTime).fromNow()}
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export default LeaveMessageReplyItem
