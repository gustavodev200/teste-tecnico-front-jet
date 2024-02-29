import React from "react";

interface NextReservationCellProps {
  dataReservation: string;
}

const NextReservationCell = ({ dataReservation }: NextReservationCellProps) => {
  return (
    <td>
      <span className="text-gray-500 font-normal">{dataReservation}</span>
    </td>
  );
};

export default NextReservationCell;
