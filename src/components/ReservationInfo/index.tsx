interface IReservationInfoProps {
  name: string;
  nextReservation: Date;
}

export const ReservationInfo = ({
  name,
  nextReservation,
}: IReservationInfoProps) => {
  return (
    <div className="block md:table-cell">
      <span className="block md:hidden">{name}</span>
      <span className="block md:hidden">Next reservation: </span>
      <span>{`${
        nextReservation.getMonth() + 1
      }/${nextReservation.getUTCDate()}`}</span>
    </div>
  );
};
