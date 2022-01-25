import MyNavLink from "../MyNavLink"
import "./index.css"
const Nav = () => {
  return (
    <>
      <div className="Navbox">
        <div className="NavTitle">后台管理</div>
        <ul className="funcBtns">
          <li>
            <MyNavLink to="/admin/home" className="funcLi">
              首页
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/admin/article" className="funcLi">
              文章
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/admin/gallery" className="funcLi">
              图库
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/admin/say" className="funcLi">
              说说
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/admin/home" className="funcLi">
              留言板
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/admin/home" className="funcLi">
              友链
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/admin/home" className="funcLi">
              作品
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/admin/backstage" className="funcLi">
              关于
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/admin/log" className="funcLi">
              建站日志
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/admin/draft" className="funcLi">
              草稿箱
            </MyNavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Nav
