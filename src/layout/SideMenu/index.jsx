import React from "react";

const SideMenu = () => (
  <nav className="navbar-default navbar-static-side" role="navigation">
    <div className="sidebar-collapse">
      <ul className="nav metismenu" id="side-menu">
        <li className="nav-header">
          <div className="dropdown profile-element">
            <span>
              <img
                alt="circle-img"
                className="img-circle"
                src="./assets/img/profile_small.jpg"
              />
            </span>
            <a data-toggle="dropdown" className="dropdown-toggle" href="#/">
              <span className="clear">
                <span className="block m-t-xs">
                  <strong className="font-bold">Betinho</strong>
                </span>
                <span className="text-muted text-xs block">
                  Developer <b className="caret"></b>
                </span>
              </span>
            </a>
            <ul className="dropdown-menu animated fadeInRight m-t-xs">
              <li>
                <a href="#/">Profile</a>
              </li>
              <li className="divider"></li>
              <li>
                <a href="#/">Logout</a>
              </li>
            </ul>
          </div>
          <div className="logo-element">EC</div>
        </li>
        <li>
          <a href="#/">
            <i className="fa fa-laptop"></i>
            <span className="nav-label">Home</span>
          </a>
        </li>
        <li>
          <a href="#/">
            <i className="fa fa-table"></i>
            <span className="nav-label">Blog</span>
            <span className="fa arrow"></span>
          </a>
          <ul className="nav nav-second-level collapse">
            <li>
              <a href="#/">Option 1</a>
            </li>
            <li>
              <a href="#/">Option 2</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
);

export default SideMenu;
