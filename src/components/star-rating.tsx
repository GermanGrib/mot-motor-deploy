import { SVGProps } from "react";

interface StarRatingProps extends SVGProps<SVGSVGElement> {
  rating: number;
}

const StarRating = ({ rating, className }: StarRatingProps) => {
  const roundedRating = Math.round(rating);

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className="w-6 h-6"
          style={
            i <= roundedRating
              ? { fill: "#FEC531" }
              : { fill: "#333C49", opacity: ".1" }
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>,
      );
    }
    return stars;
  };

  return <div className={className}>{renderStars()}</div>;
};

export default StarRating;
