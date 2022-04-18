import React from "react";
import useReview from "../../Hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews] = useReview();

  return (
    <div className="row justify-content-center align-items-center g-4 container-fluid mx-auto my-5">
      {reviews.map((review) => (
        <Review key={review.id} review={review}></Review>
      ))}
    </div>
  );
};

export default Reviews;
