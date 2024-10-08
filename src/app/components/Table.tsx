import React from "react";

// กำหนด Column type ให้ยืดหยุ่นสำหรับทุกๆ ชนิดข้อมูล
type Column<T> = {
  header: string;
  accessor: keyof T | string;
  className?: string;
};

// ใช้ Generics เพื่อทำให้ Table รองรับชนิดข้อมูลที่หลากหลาย
type TableProps<T extends { id: number }> = {
  columns: Column<T>[];
  data: T[];
  renderRow: (item: T) => React.ReactNode;
};

const Table = <T extends { id: number }>({
  columns,
  data,
  renderRow,
}: TableProps<T>) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-800">
          {columns.map((col) => (
            <th key={col.accessor as string} className={col.className}>
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
