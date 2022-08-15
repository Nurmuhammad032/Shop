import { images } from "../../constants";
import { Link } from "react-router-dom";
import "./Landing.scss";

const Landing = () => {
  return (
    <div className="landing-wrapper">
      <div>
        <Link to='/dresses-collections'>
          <img className="landing" src={images.landing} alt="landingImg" />
          <img
            className="landingPhone"
            src={images.landingPhone}
            alt="landingImg"
          />
        </Link>
      </div>
      <div className="landing-desc">
        <p>
          BUY ONLINE & PICK UP IN STORE -{" "}
          <span>select “store pick up” at checkout + pick up same day!</span>
        </p>
      </div>
    </div>
  );
};

export default Landing;
