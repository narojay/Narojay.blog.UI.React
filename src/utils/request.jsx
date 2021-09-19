import moment from "moment"
import http from "./http"

export function getConfigsByProductId(postId) {
  return http.get("Post/id?id=" + postId)
}

export function AddPostApi(title, postContent) {
  return http
    .post("Post/add", {
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
