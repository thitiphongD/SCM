"use client";
import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { MoreIcon, SexIcon } from "../icon/UtilIcon";

const data = [
  {
    name: "Totals",
    count: 100,
    fill: "#fff",
  },
  {
    name: "Boys",
    count: 50,
    fill: "#326b77",
  },
  {
    name: "Girls",
    count: 50,
    fill: "#1b485e",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <MoreIcon />
      </div>
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <SexIcon />
        </div>
      </div>
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#54a1a1] rounded-full" />
          <div className="font-bold">4567</div>
          <div className="text-xs text-gray-300">Boys (50%)</div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#9fc8c8] rounded-full" />
          <div className="font-bold">7894</div>
          <div className="text-xs text-gray-300">Girls (50%)</div>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
