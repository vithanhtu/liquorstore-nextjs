import React, { useState } from "react";
import StarRating from "./StarRating";

function ReviewForm() {
  const [rating, setRating] = useState(1);

  const handleRatingChange = (newRating: any) => {
    setRating(newRating);
  };

  const handleSubmit = () => {
    // Handle review submission
  };

  return (
    <div className="flex items-center text-brown-color">
      <span className="mr-2">{rating}.0</span>
      <StarRating value={rating} onChange={handleRatingChange} />
      {/* <button onClick={handleSubmit}>Submit Review</button> */}
    </div>
  );
}

export default ReviewForm;
