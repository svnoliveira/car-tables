import { TCar } from "@/app/data/database";
import { StatusButton } from "../StatusButton";
import Image from "next/image";
import { RatingStars } from "../RatingStars";
import { CarImage } from "../CarImage";
import { ReservationInfo } from "../ReservationInfo";

interface ICarCardProps {
  car: TCar;
}

export const CarCard = ({ car }: ICarCardProps) => {
  return (
    <li className="flex relative w-full gap-4 py-2 border-b-2 border-gray-200 sm:gap-[15dvw] md:table-row">
      <CarImage picture={car.picture} name={car.name} />
      <ReservationInfo
        name={car.name}
        nextReservation={car.nextReservation}
        rating={car.rating}
      />
      <StatusButton available={car.status} />
      <RatingStars rating={car.rating} mobile={false} />
      <div className="block md:table-cell ml-auto">
        <Image
          className="object-contain w-5 h-5"
          src="/icons/action.svg"
          alt="3 dots Icon, simbolizing the menu"
          height={20}
          width={20}
        />
      </div>
    </li>
  );
};
