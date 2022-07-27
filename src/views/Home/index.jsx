import { Popover } from "antd"
import React, { useEffect, useState } from "react"
import PostList from "../PostList"
import "./index.css"
import { WechatOutlined, QqOutlined, GithubOutlined } from "@ant-design/icons"
import TagCard from "./Tags"
import SearchBar from "./SearchBar"
const Home = () => {
  const [state, setstate] = useState({
    currentPage: 1,
    pageSize: 10,
    totalCount: 10
  })
  const setTotalCount = (page) => {
    state.totalCount = page
    setstate({ ...state })
  }
  useEffect(() => {
    return () => {
      setstate({})
    }
  }, [])

  const WX = (
    <img
      src={"https://img-blog.csdnimg.cn/072b397cbefc494c97ebbf269aede63d.png"}
      alt="QQ"
      className="QR-code"
    />
  )
  const QQ = (
    <img
      src={"https://img-blog.csdnimg.cn/5ce97ef92da04bdab124dfe4b1543fca.png"}
      alt="QQ"
      className="QR-code"
    />
  )
  return (
    <div>
      <div className="home-top-img">
        <SearchBar />
      </div>
      <div className="home-body">
        <div className="home-main">
          <PostList
            currentPage={state.currentPage}
            pageSize={state.pageSize}
            setTotalCount={setTotalCount}
          />
        </div>
        <div className="home-aside">
          <div className="myname theme-color">
            <div className="card-box">
              <Popover content={WX} overlayClassName="social-btn-card">
                <WechatOutlined className="cardstyle" />
              </Popover>
              <Popover content={QQ} overlayClassName="social-btn-card">
                <QqOutlined className="cardstyle" />
              </Popover>
              <a
                href="https://github.com/narojay"
                target="_blank"
                rel="noreferrer"
              >
                <GithubOutlined className="cardstyle" />
              </a>
            </div>
          </div>
          <TagCard />
        </div>
      </div>
    </div>
  )
}

export default Home
