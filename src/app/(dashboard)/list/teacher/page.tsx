import { FilterIcon, PlusIcon, SortIcon } from "@/app/components/icon/UtilIcon";
import Pagination from "@/app/components/Pagination";
import TableSearch from "@/app/components/TableSearch";
import React from "react";

const ListTeacherPage = () => {
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teacher</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-600">
              <FilterIcon />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-600">
              <SortIcon />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-600">
              <PlusIcon />
            </button>
          </div>
        </div>
        <div></div>
        <Pagination />
      </div>
    </div>
  );
};

export default ListTeacherPage;
