import React from "react";
import { SearchIcon } from "../icon/UtilIcon";
import { AnnouncementIcon, MessageIcon } from "../icon/MenuIcon";

const Navbar = () => {
  return (
    <div className="navbar-con">
      <div className="navbar-input">
        <SearchIcon />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="navbar-item">
          <MessageIcon />
        </div>
        <div className="navbar-item relative">
          <AnnouncementIcon />
          <div className="notification-number">1</div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Daew Jaa</span>
          <span className="text-[10px] text-right">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
