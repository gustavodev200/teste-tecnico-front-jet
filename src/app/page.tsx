import { CarReservationTable } from "./components/CarReservationTable";
import { carsReservation } from "./api/carsReservationData";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CarReservationTable.Root>
        <CarReservationTable.Head />
        {carsReservation?.map((car_reservation) => (
          <CarReservationTable.Row
            key={car_reservation.id}
            car_reservation={car_reservation}
          />
        ))}
      </CarReservationTable.Root>
    </main>
  );
}
