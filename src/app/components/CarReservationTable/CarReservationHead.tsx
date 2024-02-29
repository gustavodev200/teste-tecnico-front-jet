import React from "react";

const CarReservationHead = () => {
  return (
    <thead className="bg-gray-50">
      <tr className="border-b border-gray-200 text-gray-500 font-medium">
        <th className="text-start p-4">Car</th>
        <th className="text-start">Reservation Next</th>
        <th className="text-start">Status</th>
        <th className="text-start">Rating</th>
        <th className="text-start">Actions</th>
      </tr>
    </thead>
  );
};

export default CarReservationHead;
