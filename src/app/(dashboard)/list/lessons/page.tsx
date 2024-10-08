import {
  FilterIcon,
  PlusIcon,
  SortIcon,
  BinIcon,
  PenIcon,
} from "@/app/components/icon/UtilIcon";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import { LessonType } from "@/app/types/type";
import { lessonsData, role } from "@/lib/data";
import Link from "next/link";
import React from "react";

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Action",
    accessor: "action",
  },
];

const ListLessonPage = () => {
  const renderRow = (item: LessonType) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#14919b] hover:text-white"
    >
      <td className="p-4">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teacher/${item.id}`}>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0B6477]">
              <PenIcon />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-red-700">
              <BinIcon />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Lessons</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-600">
              <FilterIcon />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-600">
              <SortIcon />
            </button>
            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-600">
                <PlusIcon />
              </button>
            )}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={lessonsData} />
      <Pagination />
    </div>
  );
};

export default ListLessonPage;
