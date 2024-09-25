import React from "react";
import { MoreIcon } from "./icon/UtilIcon";

type Props = {
  type: string;
};

const UserCard: React.FC<Props> = ({ type }) => {
  return (
    <div className="rounded-2xl odd:bg-[#54a1a1] even:bg-[#9fc8c8] p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full">
          2024/25
        </span>
        <MoreIcon />
      </div>
      <h1 className="text-2xl font-semibold my-4 text-[#122740]">1234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
};

export default UserCard;
