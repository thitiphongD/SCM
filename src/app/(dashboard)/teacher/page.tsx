import Announcements from "@/app/components/Announcements";
import BigCalendar from "@/app/components/BigCalendar";
import React from "react";

const TeacherPage: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col flex-1 xl:flex-row p-4 gap-4">
      <div className="w-full xl:w-2/3">
        <div className="bg-white h-full p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;
