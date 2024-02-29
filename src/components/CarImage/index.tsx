import Image from "next/image";
interface ICarImageProps {
    picture: string
    name: string
};

export const CarImage = ({picture, name}:ICarImageProps) => {
    return(
        <div className="block md:table-cell">
        <Image
          src={picture}
          alt={`Photo of the car ${name}`}
          height={150}
          width={150}
          priority
        />
        <span className="hidden md:block">{name}</span>
      </div>
    )
}