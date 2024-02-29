import Image from "next/image";
interface ICarImageProps {
  picture: string;
  name: string;
}

export const CarImage = ({ picture, name }: ICarImageProps) => {
  return (
    <div className="block md:table-cell">
      <Image className="object-contain w-[85px] h-auto"
        src={picture}
        alt={`Photo of the car ${name}`}
        height={85}
        width={85}
        priority
      />
      <span className="hidden md:block">{name}</span>
    </div>
  );
};
