import axios from "axios"
import { message, Spin } from "antd"
import ReactDOM from "react-dom"
message.config({ maxCount: 3 })
let requestCount = 0

// 显示loading
function showLoading() {
  if (requestCount === 0) {
    var dom = document.createElement("div")
    dom.setAttribute("id", "loading")
    document.body.appendChild(dom)
    ReactDOM.render(<Spin tip="加载中..." size="large" />, dom)
  }
  requestCount++
}
// 隐藏loading
function hideLoading() {
  requestCount--
  if (requestCount === 0) {
    document.body.removeChild(document.getElementById("loading"))
  }
}
// const MOCK_API =
//   "https://www.fastmock.site/mock/ea8ceeffbca9c66d695f3bc1fead877b/backstage/"

const whiteApi = []

const http = axios.create({
  baseURL: process.env.REACT_APP_API,
  // baseURL: process.env.REACT_APP_ENV === 'mock' ? MOCK_API : window.location.origin,
  // withCredentials: true,
  headers: { isLoading: false },

  timeout: 1000 * 60 * 3
})

http.interceptors.request.use(
  function (config) {
    if (config.headers.isLoading !== false) {
      showLoading()
    }
    const { url } = config
    if (whiteApi.includes(url)) {
      const token = window.sessionStorage.getItem("token")
      if (!token) {
        return Promise.reject({
          code: 4002,
          message: "为获取到令牌，请先登录",
          data: null
        })
      }
      config.headers.Authorization = token
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
http.interceptors.response.use(
  function (response) {
    const data = response
    if (data.config.headers.isLoading !== false) {
      hideLoading()
    }
    if (response.status === 200 || response.status === 204) {
      return data
    } else {
      message.error(data.message || data.desc)
      return Promise.reject(response)
    }
  },
  function (error) {
    if (error.code === 4002) {
      message.error(error.message)
      window.location.href = "#/login"
      return Promise.reject(error)
    }
    return Promise.reject(error.response)
  }
)

export default http
