import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

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
    <div className="d-grid justify-content-center">
      <animated.div className="font-bold fs-6 text-danger" style={props}>
        EI PAGE DUNIAY NAI
      </animated.div>

      <img className="w-3/5" src={require("./404-image.jpg")} alt="" />
    </div>
  );
};

export default PageNotFound;
