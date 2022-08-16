import "./NotFound.scss";
import { Link } from "react-router-dom";
import { images } from "../../constants";

const NotFound = () => {
  return (
    <div className="app__notfound">
      <div className="app__notfound-info">
        <h1>404 Page Not Found</h1>
        <p>The page you were looking for does not exist.</p>
        <Link to="/" className="app__notfound-link">
          back to home
        </Link>
      </div>

      <div className="service-container">
        <div>
          <img src={images.location} alt="ServiceImg" />
        </div>
        <div>
          <img src={images.shipping} alt="ServiceImg" />
        </div>
        <div>
          <img src={images.pickUp} alt="ServiceImg" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
