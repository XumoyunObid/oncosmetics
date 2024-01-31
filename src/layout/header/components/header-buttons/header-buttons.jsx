import React from "react";
import { SearchIcon } from "../../../../assets/search-icon";
import { Select } from "../select";
import {UserIcon} from "../../../../assets/icons/User-icon";
import { Hearticon } from "../../../../assets/icons/heart-icon";
import "./header-button.css"

export const HeaderButtons = () => {
  return (
    <div className="headerButton">
      <Select/>
      <SearchIcon /> 
      <Hearticon/>
      <UserIcon/>
    </div>
  );
};
