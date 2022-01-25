import React from "react"
import MyNavLink from "../../../MyNavLink"
import Infor from "../Infor"
import Notice from "../Notice"
import Statictict from "../Statictict"
import Welcome from "../Welcome"
import styles from "./index.module.css"
const Home = () => {
  return (
    <>
      <div className={styles.outlineBox}>
        <Welcome />
        <Infor />
        <Notice />
      </div>
      <div className={styles.statistict}>
        <MyNavLink to="/admin/article" className={styles.homelink}>
          <Statictict type="post"></Statictict>
        </MyNavLink>
        <MyNavLink to="/admin/say" className={styles.homelink}>
          <Statictict type="label"></Statictict>
        </MyNavLink>
        <MyNavLink to="/admin/say" className={styles.homelink}>
          <Statictict type="post"></Statictict>
        </MyNavLink>
        <MyNavLink to="/admin/say" className={styles.homelink}>
          <Statictict type="post"></Statictict>
        </MyNavLink>
        <MyNavLink to="/admin/say" className={styles.homelink}>
          <Statictict type="post"></Statictict>
        </MyNavLink>
      </div>
    </>
  )
}

export default Home
