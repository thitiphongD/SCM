import AttendanceChart from "@/app/components/charts/AttendanceChart";
import CountChart from "@/app/components/charts/CountChart";
import UserCard from "@/app/components/UserCard";
import React from "react";

const AdminPage: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="w-full lg:w-[28%] h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-[70%] h-[450px]">
            <AttendanceChart />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3">R</div>
    </div>
  );
};

export default AdminPage;
