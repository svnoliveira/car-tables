import Image from "next/image";

interface IStatusButton {
  available: boolean;
}

export const StatusButton = ({ available }: IStatusButton) => {
  return (
    <>
      {available ? (
        <div>
          <Image
            src={"/icons/success.svg"}
            alt="A green V icon symbolizing success"
            width={24}
            height={24}
          />
        </div>
      ) : (
        <div>
          <Image
            src={"/icons/failure.svg"}
            alt="A red X button symbolizing success"
            width={24}
            height={24}
          />
        </div>
      )}
      {available ? <div>Available</div> : <div>Unavailable</div>}
    </>
  );
};
