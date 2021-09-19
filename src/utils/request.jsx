import moment from "moment"
import http from "./http"

export function getConfigsByProductId(postId) {
  return http.get("Post/id?id=" + postId)
}

export function AddPostApi(title, postContent) {
  return http
    .post("post/add", {
      id: 0,
      title: title,
      content: postContent,
      author: "narojay",
      creationTime: moment().format(),
      modifyTime: moment().format(),
      userId: 1
    })
    .then((x) => {
      console.log(x.data)
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
