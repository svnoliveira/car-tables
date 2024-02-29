import { carDatabase } from "@/app/data/database";
import { Header } from "../Header";
import { CarCard } from "../CarCard";

export const CarList = () => {
  return (
    <section className="flex w-full md:table">
      <Header />
      <ul className="flex flex-col w-full p-4 md:table-row-group">
        {carDatabase.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </ul>
    </section>
  );
};
