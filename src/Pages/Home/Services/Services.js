import React from "react";
import useServices from "../../../Hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services] = useServices();

  return (
    <div className="row justify-content-center align-items-center g-4 container-fluid mx-auto my-5">
      {services.map((service) => (
        <Service key={service.id} service={service}></Service>
      ))}
    </div>
  );
};

export default Services;
