import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class SideBar extends Component {
  handleSubMenu = (e) => {
    console.log(e.target);
  };
  render() {
    let items = [
      { label: "Main", icon: null, isTitle: true, link: null },
      {
        label: "Dashboard",
        icon: "home",
        isTitle: false,
        link: "index",
        sub: null,
      },
      {
        label: "Customers",
        icon: "users",
        isTitle: false,
        link: "customers",
        sub: null,
      },
      {
        label: "Expenses",
        icon: "box",
        isTitle: false,
        link: "expenses",
        sub: null,
      },
      {
        label: "Reports",
        icon: "chart-pie",
        isTitle: false,
        link: "reports",
        sub: [
          { label: "Sales Report", link: "sales-report" },
          { label: "Expenses Report", link: "expenses-report" },
          { label: "Profit & Loss Report", link: "profit-loss-report" },
        ],
      },
    ];
    return (
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              {items.map((item) =>
                item.isTitle === true ? (
                  <li key={item.label} className="menu-title">
                    <span>{item.label}</span>
                  </li>
                ) : !item.sub ? (
                  <li key={item.label}>
                    <NavLink to={item.link}>
                      <i className={`fa fa-${item.icon}`}></i>{" "}
                      <span>{item.label}</span>
                    </NavLink>
                  </li>
                ) : (
                  <li
                    onClick={this.handleSubMenu}
                    key={item.label}
                    className="submenu"
                  >
                    <a href="#">
                      <i className={`fa fa-${item.icon}`}></i>{" "}
                      <span> {item.label}</span>{" "}
                      <span className="menu-arrow"></span>
                    </a>
                    <ul onClick={this.handleSubMenu}>
                      {item.sub.map((sub) => (
                        <li key={sub.label}>
                          <a href={sub.link}>{sub.label}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
