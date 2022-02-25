import React, { Component } from "react";
import NavSearch from "./common/navsearch";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <a href="index.html" className="logo">
            <img src={require("../assets/img/logo.png")} alt="Logo" />
          </a>
          <a href="index.html" className="white-logo">
            <img src={require("../assets/img/logo-white.png")} alt="Logo" />
          </a>
          <a href="index.html" className="logo logo-small">
            <img
              src="../assets/img/logo-small.png"
              alt="Logo"
              width="30"
              height="30"
            />
          </a>
        </div>

        <a href="javascript:void(0);" id="toggle_btn">
          <i className="fas fa-bars"></i>
        </a>

        <NavSearch />

        <a className="mobile_btn" id="mobile_btn">
          <i className="fas fa-bars"></i>
        </a>

        <ul className="nav nav-tabs user-menu">
          <li className="nav-item dropdown has-arrow flag-nav">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
            >
              <img
                src={require("../assets/img/flags/us.png")}
                alt=""
                height="20"
              />{" "}
              <span>English</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a href="javascript:void(0);" className="dropdown-item">
                <img
                  src={require("../assets/img/flags/us.png")}
                  alt=""
                  height="16"
                />{" "}
                English
              </a>
              <a href="javascript:void(0);" className="dropdown-item">
                <img
                  src={require("../assets/img/flags/fr.png")}
                  alt=""
                  height="16"
                />{" "}
                French
              </a>
              <a href="javascript:void(0);" className="dropdown-item">
                <img
                  src={require("../assets/img/flags/es.png")}
                  alt=""
                  height="16"
                />{" "}
                Spanish
              </a>
              <a href="javascript:void(0);" className="dropdown-item">
                <img
                  src={require("../assets/img/flags/de.png")}
                  alt=""
                  height="16"
                />{" "}
                German
              </a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <i className="fa fa-bell"></i>{" "}
              <span className="badge rounded-pill">5</span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <a href="javascript:void(0)" className="clear-noti">
                  {" "}
                  Clear All
                </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media d-flex">
                        <span className="avatar avatar-sm">
                          <img
                            className="avatar-img rounded-circle"
                            alt=""
                            src={require("../assets/img/profiles/avatar-02.jpg")}
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Brian Johnson</span>{" "}
                            paid the invoice{" "}
                            <span className="noti-title">#DF65485</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              4 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media d-flex">
                        <span className="avatar avatar-sm">
                          <img
                            className="avatar-img rounded-circle"
                            alt=""
                            src="../assets/img/profiles/avatar-03.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Marie Canales</span>{" "}
                            has accepted your estimate{" "}
                            <span className="noti-title">#GTR458789</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              6 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media d-flex">
                        <div className="avatar avatar-sm">
                          <span className="avatar-title rounded-circle bg-primary-light">
                            <i className="far fa-user"></i>
                          </span>
                        </div>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">
                              New user registered
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              8 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media d-flex">
                        <span className="avatar avatar-sm">
                          <img
                            className="avatar-img rounded-circle"
                            alt=""
                            src="../assets/img/profiles/avatar-04.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Barbara Moore</span>{" "}
                            declined the invoice{" "}
                            <span className="noti-title">#RDW026896</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              12 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="activities.html">
                      <div className="media d-flex">
                        <div className="avatar avatar-sm">
                          <span className="avatar-title rounded-circle bg-info-light">
                            <i className="far fa-comment"></i>
                          </span>
                        </div>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">
                              You have received a new message
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              2 days ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="activities.html">View all Notifications</a>
              </div>
            </div>
          </li>

          <li className="nav-item dropdown has-arrow main-drop">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <span className="user-img">
                <img
                  src={require("../assets/img/profiles/avatar-01.jpg")}
                  alt=""
                />
                <span className="status online"></span>
              </span>
              <span>Admin</span>
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="profile.html">
                <i className="fa fa-user" className="me-1"></i> Profile
              </a>
              <a className="dropdown-item" href="settings.html">
                <i className="fa fa-settings" className="me-1"></i> Settings
              </a>
              <a className="dropdown-item" href="login.html">
                <i className="fa fa-log-out" className="me-1"></i> Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
