import { useState } from "react";
import { MdOutlineStarBorder } from "react-icons/md";

import { MdStar } from "react-icons/md";
export default function Rating() {
  const [rating, setRating] = useState("");
  const handleRating = () => {
    setRating(!rating);
  };

  return (
    <div>
      <button onClick={handleRating}>
        {rating ? (
          <div className="text-yellow-600">
            <MdStar />
          </div>
        ) : (
          <MdOutlineStarBorder />
        )}
      </button>
    </div>
  );
}
