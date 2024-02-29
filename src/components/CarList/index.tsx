import { carDatabase } from "@/app/data/database";
import { Header } from "../Header";
import { CarCard } from "../CarCard";

export const CarList = () => {
  return (
    <section className="flex w-full md:table md:mt-8 md:max-w-[1376px] md:mx-auto md:border md:border-gray-200 md:shadow-lg md:rounded-3xl md:overflow-hidden">
      <Header />
      <ul className="flex flex-col w-full p-4 md:table-row-group">
        {carDatabase.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </ul>
    </section>
  );
};
