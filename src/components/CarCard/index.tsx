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
    <li className="flex justify-between relative w-full md:table-row">
      <CarImage picture={car.picture} name={car.name} />
      <ReservationInfo name={car.name} nextReservation={car.nextReservation} />
      <StatusButton available={car.status} />
      <RatingStars rating={car.rating} />
      <div className="block md:table-cell">
        <Image className="object-contain w-5 h-5"
          src="/icons/action.svg"
          alt="3 dots Icon, simbolizing the menu"
          height={20}
          width={20}
        />
      </div>
    </li>
  );
};
