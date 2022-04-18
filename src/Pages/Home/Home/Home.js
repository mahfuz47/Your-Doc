import React from "react";
import Banner from "../Banner/Banner";
import useServices from "../../../Hooks/useServices";
import Service from "../Service/Service";
import { Link } from "react-router-dom";
import useReview from "../../../Hooks/useReviews";
import Review from "../../Review/Review";
import "./Home.css";

const Home = () => {
  const [services] = useServices();
  const [reviews] = useReview();
  return (
    <div>
      <Banner></Banner>
      <h1 className="text-secondary my-5 mx-auto text-center text-decoration-underline">
        SERVICES(6)
      </h1>
      <div className="row justify-content-center align-items-center g-4 container-fluid mx-auto my-5">
        {services.slice(0, 6).map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-secondary px-5 rounded fw-bold">
          <Link to="/service" className="text-dark text-decoration-none">
            SEE MORE
          </Link>
        </button>
      </div>
      <h1 className="text-secondary my-5 mx-auto text-center text-decoration-underline">
        REVIEWS(3)
      </h1>
      <div className="row justify-content-center align-items-center g-4 container-fluid mx-auto my-5">
        {reviews.slice(0, 3).map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-secondary px-5 rounded fw-bold">
          <Link to="/reviews" className="text-dark text-decoration-none">
            SEE MORE
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
