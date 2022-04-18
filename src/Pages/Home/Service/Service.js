import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { price, image, serviceName, shortDescription } = service;
  //   console.log(serviceName);
  return (
    <div className="col-md-3 col-sm-12 mx-3 text-center service-box p-0 lh-1">
      <img className="service-image" src={image} alt="" />
      <h5 className="fw-bold">{serviceName}</h5>
      <p>
        <b>Charge:</b> ${price}
      </p>
      <p>
        <small>{shortDescription}</small>
      </p>
      <button className="btn btn-warning px-5 fw-bold rounded-pill my-1">
        Checkout
      </button>
    </div>
  );
};

export default Service;
