import "./Infos.scss";
import { Link } from "react-router-dom";

const Infos = () => {
  return (
    <div className="app__infos">
      <h2>
        Trendy Clothing & Accessories at Dress Up - An Online Dress Boutique
      </h2>
      <p>
        Dress Up is a women's clothing store with new trendy and affordable
        arrivals dropping 2-3 times weekly. Shop the latest trends in women's
        fashion <Link to="">dresses</Link>, <Link to="">tops</Link>,{" "}
        <Link to="">sweaters</Link>, <Link to="">skirts</Link>, <Link to="">jeans</Link>,{" "}
        <Link to="">accessories</Link> & more. At Dress Up, you can shop at one of
        the 16 <Link to="">locations</Link> across the southeast, or online 24/7 at{" "}
        <Link to="">ShopDressup.com</Link>.
      </p>
    </div>
  );
};

export default Infos;
