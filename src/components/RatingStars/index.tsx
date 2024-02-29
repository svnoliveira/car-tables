import Image from "next/image";

interface IRatingStars {
  rating: number;
}

export const RatingStars = ({ rating }: IRatingStars) => {
  const getStarList = (n: number) => {
    return Array.from({ length: n + 1 }, (_, i) => i);
  };

  return (
    <div className="flex md:table-cell">
      <ul className="flex flex-row">
        {getStarList(rating).map((star) => (
          <li key={star}>
            <Image
              src={"/icons/star.svg"}
              alt="A star icon"
              width={20}
              height={20}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
