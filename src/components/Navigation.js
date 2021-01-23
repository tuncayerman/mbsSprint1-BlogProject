import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
  {
    title: "Login",
    path: "/login",
  },
];

export default function Navigation(props) {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav
      className={`site-navigation ${menuActive && "active"}`}
      role="navigation"
    >
      <span className="menu-title">My Awesome Blog</span>
      <div className="menu-content-container">
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className="menu-avatar-container">
          {" "}
          <Avatar
            style={{ color: "#fffff", backgroundColor: "#487e95" }}
            size={42}
          >
            T
          </Avatar>
          <span className="menu-avatar-name">{props.user.firstName}</span>
        </div>
      </div>
      <i
        className="ionicons icon ion-ios-menu"
        onClick={(ev) => setMenuActive(!menuActive)}
      />
    </nav>
  );
}
