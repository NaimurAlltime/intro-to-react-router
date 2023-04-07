import React from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/friends">Friends</ActiveLink>
      <ActiveLink to="/posts">Posts</ActiveLink>
      <ActiveLink to="/about">About</ActiveLink>
      <ActiveLink to="/blog">Blog</ActiveLink>
      <ActiveLink to="/contact">Contact</ActiveLink>
    </nav>
  );
};

export default Header;
