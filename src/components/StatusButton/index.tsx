import Image from "next/image";

interface IStatusButton {
  available: boolean;
}

export const StatusButton = ({ available }: IStatusButton) => {
  return (
    <>
      <div className="block absolute top-2 left-0 md:hidden">
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
      <div className="hidden md:table-cell md:align-middle md:border-y md:border-gray-200 md:pl-4 md:py-1">
        <div
          className={`py-1 px-3 bg-${available ? "green" : "red"}-100 text-${
            available ? "green" : "red"
          }-800 text-xs font-medium w-fit rounded-md`}
        >
          {available ? "Available" : "Unavailable"}
        </div>
      </div>
    </>
  );
};
