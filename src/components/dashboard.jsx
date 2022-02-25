import React, { Component } from "react";
import Header from "./header";
import SideBar from "./sideBar";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="nk-body bg-lighter npc-default has-sidebar no-touch nk-nio-theme">
        <div className="main-wrapper">
          <Header></Header>
          <SideBar></SideBar>
          <h1>gwea</h1>
        </div>
      </div>
    );
  }
}
