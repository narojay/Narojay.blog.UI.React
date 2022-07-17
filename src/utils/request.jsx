import { message } from "antd"
import moment from "moment"
import http from "./http"

export function getConfigsByProductId(postId) {
  return http.get("Post/id?id=" + postId)
}

export function SavePostApi(id, title, postContent, label, checkTagId) {
  return http
    .post("admin/publish_post", {
      id: id,
      title: title,
      content: postContent,
      author: "narojay",
      label: label,
      creationTime: moment().format(),
      modifyTime: moment().format(),
      postTagDto: { tagIds: checkTagId },
      userId: 2
    })
    .then((x) => {
      message.success("保存成功")
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

export function GetPostById(id) {
  return http.get("post/id?id=" + id).then((x) => {
    try {
      return x.data
    } catch {
      console.log(x)
    }
  })
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
      return x.data
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
export const deleteArticleById = (id) => {
  return http.post("admin/post/delete?id=" + id).then((x) => {
    try {
      return x.data
    } catch {
      console.log(x)
    }
  })
}

export const getAboutMeContentAsync = () => {
  return http.get("admin/aboutme").then((x) => {
    try {
      return x.data
    } catch {
      console.log(x)
    }
  })
}

export const ModifyAboutMeContentAsync = (content) => {
  return http.post("admin/aboutme/modify", { content: content }).then((x) => {
    try {
      return x.data
    } catch {
      console.log(x)
    }
  })
}

export const GetSoliloquizedListAsync = () => {
  return http.get("soliloquize").then((x) => {
    try {
      return x.data
    } catch {
      console.log(x)
    }
  })
}
export const AddLikeOrUnlikeCountAsync = (id, status) => {
  return http
    .post("post/like_unlike_count?id=" + id + "&status=" + status)
    .then((x) => {
      try {
        return x.data
      } catch {
        console.log(x)
      }
    })
}

export const GetTagsAsync = () => {
  return http.get("post/tags").then((x) => {
    try {
      return x.data
    } catch {
      console.log(x)
    }
  })
}
