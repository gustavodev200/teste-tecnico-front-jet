import React from "react";

interface StatusReservationCellProps {
  status: string;
}

const StatusReservationCell = ({ status }: StatusReservationCellProps) => {
  return (
    <td>
      <span className="text-green-800 rounded-md bg-green-100 py-0.5 px-2.5  font-medium">
        {status}
      </span>
    </td>
  );
};

export default StatusReservationCell;
