import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./PageNotFound.css";

const PageNotFound = () => {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 0,
    onRest: () => set(!flip),
  });

  return (
    <div>
      <animated.div
        className="fw-bold fs-1 text-danger text-center"
        style={props}
      >
        EI PAGE DUNIAY NAI
      </animated.div>

      <div className="d-flex justify-content-center">
        <img className="error-img" src={require("./404-image.jpg")} alt="" />
      </div>
    </div>
  );
};

export default PageNotFound;
