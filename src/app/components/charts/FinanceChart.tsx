"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { MoreIcon } from "../icon/UtilIcon";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3500,
    expense: 2000,
  },
  {
    name: "Mar",
    income: 4500,
    expense: 2200,
  },
  {
    name: "Apr",
    income: 5000,
    expense: 2600,
  },
  {
    name: "May",
    income: 4700,
    expense: 2800,
  },
  {
    name: "Jun",
    income: 5200,
    expense: 3000,
  },
  {
    name: "Jul",
    income: 5100,
    expense: 2700,
  },
  {
    name: "Aug",
    income: 5300,
    expense: 3200,
  },
  {
    name: "Sep",
    income: 4800,
    expense: 2900,
  },
  {
    name: "Oct",
    income: 4900,
    expense: 3100,
  },
  {
    name: "Nov",
    income: 4600,
    expense: 2500,
  },
  {
    name: "Dec",
    income: 5500,
    expense: 3400,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-lg w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <MoreIcon />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 35,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#122740"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#54a1a1"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
