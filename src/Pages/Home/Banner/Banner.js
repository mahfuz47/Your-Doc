import { Carousel } from "react-bootstrap";
import image1 from "../../../Images/image1.jpg";
import image3 from "../../../Images/image3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption>
          <div className="slider-header text-dark">
            <h1>Prof. Dr. MAHFUZUR RAHMAN</h1>
            <h5 className="pe-4">
              MBBS, FCPS (Medicine), FRCP, MD (Rheumatology)
            </h5>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />

        <Carousel.Caption>
          <div className="slider-header2">
            <h1>Owner of YOUR DOC</h1>
            <h5>
              President of Asia Pacific League of Associations for Rheumatology
            </h5>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
