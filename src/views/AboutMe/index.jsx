import React, { useEffect, useState } from "react"
import blogmarked from "../../utils/blogmarked.js"
import ReactEcharts from "echarts-for-react"
import { getAboutMeContentAsync, getLabelStatistics } from "../../utils/request"
import "./index.css"
import { Switch } from "antd"
const AboutMe = () => {
  const [state, setstate] = useState([])
  const [aboutMeContent, setaboutMeContent] = useState("")
  const [aboutme, setaboutme] = useState(true)
  const my = {}
  const my1 = { color: "#696969" }
  const change = () => {
    setaboutme(!aboutme)
  }
  const aboutsite = (
    <div className="aboutme-content-box">
      <ReactEcharts
        // eslint-disable-next-line no-use-before-define
        option={{
          series: [
            {
              type: "pie",
              data: state,
              roseType: "area"
            }
          ]
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  )
  useEffect(() => {
    getAboutMeContentAsync().then((x) => {
      setaboutMeContent(x)
    })
    getLabelStatistics().then((x) => {
      var arr = []
      for (var key in x.data) {
        if (x.data.hasOwnProperty(key)) {
          arr.push({ name: key, value: x.data[key] })
        }
      }
      setstate(arr)
    })
  }, [])
  let html = blogmarked(aboutMeContent).replace(/<pre>/g, "<pre id='hljs'>")
  const aboutmehim = (
    <div
      className="markdownStyle  "
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  )

  return (
    <>
      <div className="aboutme-main-box">
        <div className="aboutme-title-box">
          <div className="about-site-first" style={aboutme ? my : my1}>
            关于本站
          </div>
          <Switch defaultChecked onChange={change} />
          <div className="about-site-second" style={!aboutme ? my : my1}>
            关于我
          </div>
        </div>
        {aboutme ? aboutsite : aboutmehim}
      </div>
    </>
  )
}

export default AboutMe
