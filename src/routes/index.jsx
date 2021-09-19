// import { Link, Route } from "react-router-dom";
import Home from "../views/Home"
import Login from "../views/Login"

// import AsyncComponent from '@/components/AsyncComponent'
function GG() {
  return <div>asdasd123132</div>
}
function Test(props) {
  console.log(window)
  return (
    <div>
      123
      {/* <Link to={window.location.pathName + props.links}>a</Link> */}
      {/* {() => props.links} */}
      {/* <Route path="/124" component={props.links} /> */}
      {/* <GG /> */}
    </div>
  )
}

const routes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/12",
    component: Login
  },
  {
    path: "/123",
    // component: Test,
    render: (props) => {
      console.log(props)
      return <Test {...props} links={"/124"} />
    },
    routes: [
      {
        path: "/124",
        component: GG
      }
    ]
  },
  {
    path: "/124",
    // component: Test,
    render: (props) => {
      console.log(props)
      return <GG />
    },
    level: 1
    // routes: [
    //   {
    //     path: "/124",
    //     component: GG,
    //   },
    // ],
  }
]

export default routes
