import { TCar } from "@/app/data/database";
import { StatusButton } from "../StatusButton";
import Image from "next/image";
import { RatingStars } from "../RatingStars";

interface ICarCardProps {
  car: TCar;
}

export const CarCard = ({ car }: ICarCardProps) => {
  return (
    <li>
      <div>
        <Image
          src={car.picture}
          alt={`Photo of the car ${car.name}`}
          height={85}
          width={85}
          priority
        />
      </div>
      <span>{car.name}</span>
      <div>
        <span>Next reservation: </span>
        <span>{`${car.nextReservation.getMonth()+1}/${car.nextReservation.getUTCDate()}`}</span>
      </div>
      <StatusButton available={car.status} />
      <RatingStars rating={car.rating} />
      <div>
        <Image
          src="/icons/action.svg"
          alt="3 dots Icon, simbolizing the menu"
          height={20}
          width={20}
        />
      </div>
    </li>
  );
};
