import StarRating from "./star-rating";

interface ReviewProps {
  id?: number;
  rating: number;
  authorName: string;
  authorLastName: string;
  text: string;
  publicationDate: string;
}

const Review = ({
  rating,
  authorName,
  authorLastName,
  text,
  publicationDate,
}: ReviewProps) => {
  const firstLastNameLetter = authorLastName.slice(0, 1);

  return (
    <div>
      <div className="flex justify-between mb-4 items-center">
        <div className="flex flex-col md:flex-row gap-1.5 md:gap-5">
          <div className="text-base font-bold">
            {authorName + " " + firstLastNameLetter}.
          </div>
          <StarRating className="flex gap-0.5 md:gap-1.5" rating={rating} />
        </div>
        <div className="text-xs md:text-base font-medium opacity-50">
          {publicationDate}
        </div>
      </div>
      <div className="text-sm font-normal">{text}</div>
    </div>
  );
};

export default Review;
