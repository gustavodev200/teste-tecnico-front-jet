import Image from "next/image";
import React from "react";
import imgCooper from "../../../../public/images/mini-cooper.png";

interface CarReservationCellProps {
  name: string;
}

const CarReservationCell = ({ name }: CarReservationCellProps) => {
  return (
    <td className="px-4 py-1 gap-2 flex">
      <Image
        src={imgCooper}
        width={100}
        height={100}
        alt="Mini Cooper"
        className="w-[48px] h-[46px]"
      />
      <h2 className="text-gray-900">{name}</h2>
    </td>
  );
};

export default CarReservationCell;
