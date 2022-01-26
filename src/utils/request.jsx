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
      userId: 2
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

export function pushLeaveMessages(leaveMessage) {
  const { content, nickName, email, parentId } = leaveMessage
  return http
    .post("messageboard/add", {
      id: 0,
      content: content,
      nickName: nickName,
      email: email,
      parentId: parentId,
      creationTime: moment().format("YYYY-MM-DD hh:mm:ss")
    })
    .catch((x) => {
      console.log(x)
    })
    .then((x) => {
      console.log(x)
    })
}

export const getUserIp = () => {
  return http
    .get("User/ip")
    .catch((x) => {
      console.log(x)
    })
    .then((x) => {
      return x.data
    })
}

export const getadminNotice = () => {
  return http
    .get("notice/message")
    .catch((x) => {
      console.log(x)
    })
    .then((x) => {
      return x.data
    })
}

export const getPostAdmin = (page, size, title, label) => {
  return http
    .post("admin/posts", {
      page: page,
      size: size,
      title: title,
      label: label
    })
    .catch((x) => {
      console.log(x)
    })
    .then((x) => {
      return x.data
    })
}

export const GetStatisticDtoAsync = () => {
  return http
    .get("admin/statistic")
    .catch((x) => {
      console.log(x)
    })
    .then((x) => {
      return x.data
    })
}

export const getLabelsAsync = () => {
  return http.get("admin/labels").then((x) => {
    try {
      return x.data
    } catch {
      console.log(x)
    }
  })
}
