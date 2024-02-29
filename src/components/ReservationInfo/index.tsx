import { RatingStars } from "../RatingStars";

interface IReservationInfoProps {
  name: string;
  nextReservation: Date;
  rating: number;
}

export const ReservationInfo = ({
  name,
  nextReservation,
  rating,
}: IReservationInfoProps) => {
  return (
    <div className="flex flex-col justify-between items-center md:table-cell md:align-middle md:border-y md:border-gray-200 md:pl-4 md:py-1">
      <span className="block text-base font-semibold text-gray-900 text-center md:hidden">{name}</span>
      <div className="flex gap-1 text-xs font-normal text-gray-500 md:text-sm">
        <span className="block md:hidden">Next reservation: </span>
        <span>{`${
          nextReservation.getMonth() + 1
        }/${nextReservation.getUTCDate()}`}</span>
      </div>
      <RatingStars rating={rating} mobile={true} />
    </div>
  );
};
