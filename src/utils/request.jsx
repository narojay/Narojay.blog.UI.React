import { message } from "antd"
import moment from "moment"
import http from "./http"

export function getConfigsByProductId(postId) {
  return http.get("Post/id?id=" + postId)
}

export function AddPostApi(title, postContent, label) {
  return http
    .post("admin/publish_post", {
      id: 0,
      title: title,
      content: postContent,
      author: "narojay",
      label: label,
      creationTime: moment().format(),
      modifyTime: moment().format(),
      userId: 1
    })
    .then((x) => {
      message.success("添加成功")
    })
}

export function GetPostList(pageIndex, pageSize) {
  return http
    .post("post/posts", {
      pageIndex: pageIndex,
      pageSize: pageSize
    })
    .then((x) => x.data)
}

export function loginAsync(username, password) {
  return http.post("login/login?username=" + username + "&password=" + password)
}

export function getLabelStatistics() {
  return http.post("post/label_statistics")
}
export function getLeaveMessages(pageIndex, pageSize) {
  return http
    .post("messageboard/pages", {
      pageIndex: pageIndex,
      pageSize: pageSize
    })
    .then((x) => {
      return x.data
    })
}

export function pushLeaveMessages(pageIndex, pageSize) {
  return http
    .post("messageboard/pages", {
      pageIndex: pageIndex,
      pageSize: pageSize
    })
    .then((x) => {
      return x.data
    })
}
