import React from "react";
import CarReservationCell from "./CarReservationCell";
import NextReservationCell from "./NextReservationCell";
import RatingReservationCell from "./RatingReservationCell";
import StatusReservationCell from "./StatusReservationCell";
import { CarReservationProps } from "@/app/@types/carReservation";

type CarReservationRowProps = {
  car_reservation: CarReservationProps;
};

const CarReservationRow = ({ car_reservation }: CarReservationRowProps) => {
  return (
    <tbody>
      <tr key={car_reservation.id}>
        <CarReservationCell name={car_reservation.name} />
        <NextReservationCell
          dataReservation={car_reservation.next_reservation}
        />
        <StatusReservationCell status={car_reservation.status} />
        <RatingReservationCell />
      </tr>
    </tbody>
  );
};

export default CarReservationRow;
