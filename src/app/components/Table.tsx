import React from "react";
import { Teacher } from "../types/type";

type Column = {
  header: string;
  accessor: string;
  className?: string;
};

type Props = {
  columns: Column[];
  data: Teacher[];
  renderRow: (item: Teacher) => React.ReactNode;
};

const Table: React.FC<Props> = ({ columns, data, renderRow }) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-800">
          {columns.map((col) => (
            <th key={col.accessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <React.Fragment key={item.id}>{renderRow(item)}</React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
