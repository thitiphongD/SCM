"use client";

import React, { useState } from "react";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export const calendarEvents = [
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 8, 25, 8, 0), // เดือนกันยายน (0-indexed)
    end: new Date(2024, 8, 25, 8, 45),
  },
  {
    title: "English",
    allDay: false,
    start: new Date(2024, 8, 25, 9, 0),
    end: new Date(2024, 8, 25, 9, 45),
  },
  {
    title: "Biology",
    allDay: false,
    start: new Date(2024, 8, 25, 10, 0),
    end: new Date(2024, 8, 25, 10, 45),
  },
];

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleView = (select: View) => {
    setView(select);
  };

  return (
    <div style={{ height: "600px" }}>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={[Views.WORK_WEEK, Views.DAY]}
        view={view}
        onView={handleView}
        min={new Date(2024, 8, 25, 8, 0)} // เริ่มต้นวันที่ 25 กันยายน 2024 เวลา 8:00
        max={new Date(2024, 8, 25, 17, 0)} // สิ้นสุดวันที่ 25 กันยายน 2024 เวลา 17:00
      />
    </div>
  );
};

export default BigCalendar;
