import React from "react"
import MyNavLink from "../../../MyNavLink"
import Chart from "../Chart"
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
          <Statictict type="文章"></Statictict>
        </MyNavLink>
        <MyNavLink to="/admin/say" className={styles.homelink}>
          <Statictict type="标签"></Statictict>
        </MyNavLink>
        <MyNavLink to="/admin/say" className={styles.homelink}>
          <Statictict type="标签"></Statictict>
        </MyNavLink>
        <MyNavLink to="/admin/say" className={styles.homelink}>
          <Statictict type="标签"></Statictict>
        </MyNavLink>
        <MyNavLink to="/admin/say" className={styles.homelink}>
          <Statictict type="标签"></Statictict>
        </MyNavLink>
      </div>
      <div className={styles.statistictlabel}>
        <Chart />
        <Chart />
        <Chart />
      </div>
    </>
  )
}

export default Home
