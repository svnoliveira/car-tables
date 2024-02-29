import Image from "next/image";

interface IStatusButton {
  available: boolean;
}

export const StatusButton = ({ available }: IStatusButton) => {
  return (
    <>
      <div className="block absolute top-0 left-0 md:hidden">
        <Image
          src={`/icons/${available ? "success" : "failure"}.svg`}
          alt={`${
            available
              ? "A green V icon symbolizing available"
              : "A red X button symbolizing unavailable"
          }`}
          width={24}
          height={24}
        />
      </div>
      {available ? (
        <div className="hidden md:table-cell">Available</div>
      ) : (
        <div className="hidden md:table-cell">Unavailable</div>
      )}
    </>
  );
};
