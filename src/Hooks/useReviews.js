import axios from "axios";
import { useEffect, useState } from "react";

const useReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("reviews.json").then((data) => setReviews(data.data));
  }, []);

  return [reviews, setReviews];
};

export default useReview;
