import Image from "next/image";
interface ICarImageProps {
  picture: string;
  name: string;
}

export const CarImage = ({ picture, name }: ICarImageProps) => {
  return (
    <div className="block md:table-cell md:align-middle md:border-y md:border-gray-200 md:pl-4 md:py-1">
      <div className="flex flex-row items-center gap-2">
        <Image
          className="object-contain w-[85px] h-auto md:w-[46px]"
          src={picture}
          alt={`Photo of the car ${name}`}
          height={85}
          width={85}
          priority
        />
        <span className="hidden md:block text-sm text-gray-900">{name}</span>
      </div>
    </div>
  );
};
