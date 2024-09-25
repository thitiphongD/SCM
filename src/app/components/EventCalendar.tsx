"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MoreIcon } from "./icon/UtilIcon";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Science Fair",
    time: "10:00 AM - 12:00 PM",
    description:
      "A showcase of student projects and experiments in various fields of science.",
  },
  {
    id: 2,
    title: "Sports Day",
    time: "8:00 AM - 3:00 PM",
    description:
      "A full day of athletic competitions and games for students across all grades.",
  },
  {
    id: 3,
    title: "Parent-Teacher Conference",
    time: "1:00 PM - 4:00 PM",
    description:
      "A meeting between parents and teachers to discuss student progress and academic performance.",
  },
  {
    id: 4,
    title: "Art Exhibition",
    time: "2:00 PM - 5:00 PM",
    description:
      "An exhibition displaying student artwork in various mediums, including painting, sculpture, and photography.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white rounded-lg p-4">
      <Calendar onChange={onChange} value={value} />
      <div className="flex justify-between items-center my-4">
        <h1 className="text-lg font-semibold">Events</h1>
        <MoreIcon />
      </div>

      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border border-[#9fc8c8]"
            key={event.id}
          >
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-gray-600 text-sm">
                {event.title}
              </h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
