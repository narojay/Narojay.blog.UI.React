import React, { useEffect, useState } from "react"
import { Redirect, Route, Switch } from "react-router"
import BackStage from "./BackStage"
import "./index.css"
import Login from "./Login"
const Admin = (props) => {
  const [state, setstate] = useState("")
  useEffect(() => {
    var jwt = localStorage.getItem("jwt")
    setstate(jwt)
  }, [props])
  return (
    <>
      <Switch>
        {state ? (
          <>
            <Route path="/admin" component={BackStage} />
            <Redirect to="/admin/home" />
          </>
        ) : (
          <>
            <Route path="/admin/login" component={Login} />
            <Redirect to="/admin/login" />
          </>
        )}
      </Switch>
    </>
  )
}

export default Admin
