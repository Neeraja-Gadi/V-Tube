import React from "react";
import MainContainer from "./MainContainer"
import SideBar from "./SideBar"
import {Outlet} from "react-router-dom"

const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      <Outlet/>
      {/* <MainContainer /> */}
    </div>
  )
}

export default Body;