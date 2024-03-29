import Image from "next/image";

interface IRatingStars {
  rating: number;
  mobile: boolean;
}

export const RatingStars = ({ rating, mobile }: IRatingStars) => {
  const getStarList = (n: number) => {
    if (n === 0) {
      return [];
    }
    return Array.from({ length: n }, (_, i) => i);
  };

  return (
    <div
      className={`${
        mobile
          ? "flex md:hidden"
          : "hidden md:table-cell md:align-middle md:border-y md:border-gray-200 md:pl-4 md:py-1"
      }`}
    >
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
