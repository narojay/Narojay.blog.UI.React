import React, { useEffect, useState } from "react"
import blogmarked from "../../utils/blogmarked.js"
import ReactEcharts from "echarts-for-react"
import { getAboutMeContentAsync, getLabelStatistics } from "../../utils/request"
import "./index.css"
import { Switch } from "antd"
import {
  useGameAction,
  useGameConnection,
  useGameStateChange,
  useGameStateConnect
} from "../../utils/useGameConnection.js"
const AboutMe = () => {
  const [state, setstate] = useState([])
  const [aboutMeContent, setaboutMeContent] = useState("")
  const [aboutme, setaboutme] = useState(true)

  console.log(process.env.SIGNALR_API)
  const { hubConnectionState, error } = useGameConnection()
  const { invoke, loading, error1 } = useGameAction()
  useGameStateChange()
  useGameStateConnect()
  const my = {}
  const my1 = { color: "#696969" }
  const change = () => {
    invoke("test")
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
    let unMounted = true
    getAboutMeContentAsync().then((x) => {
      if (unMounted) {
        setaboutMeContent(x)
      }
    })
    getLabelStatistics().then((x) => {
      if (unMounted) {
        var arr = []
        for (var key in x.data) {
          if (x.data.hasOwnProperty(key)) {
            arr.push({ name: key, value: x.data[key] })
          }
        }
        setstate(arr)
      }
    })
    return () => {
      unMounted = false
    }
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
      <div className="aboutme-main-box theme-color">
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
