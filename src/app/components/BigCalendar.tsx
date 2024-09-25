"use client";
import React, { useState } from "react";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { calendarEvents } from "@/lib/data";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);
  const handleView = (select: View) => {
    setView(select);
  };
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={["work_week", "day"]}
        view={view}
        style={{ height: "98%" }}
        onView={handleView}
        min={new Date(2025, 1, 0, 8, 0, 0)} // set start time
        max={new Date(2025, 1, 0, 17, 0, 0)} // set end time
      />
    </div>
  );
};

export default BigCalendar;
