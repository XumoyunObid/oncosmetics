import React from "react";
import { Logo } from "../../assets/logo";
import { links } from "./data";
import { HeaderButtons } from "./components/header-buttons";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container box">
        <Link to={"/"}>
          <Logo />
        </Link>
        <ul className="header-list">
          {links.map((item) => (
            <li>
              <Link className="Link" key={item.path} to={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <HeaderButtons />
      </div>
    </header>
  );
};
