import React from "react";
import { SearchIcon } from "./icon/UtilIcon";

const TableSearch = () => {
  return (
    <div className="list-input">
      <SearchIcon />
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default TableSearch;
