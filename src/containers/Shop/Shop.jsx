import "./Shop.scss";
import ShopComponent from "../../components/ShopComponent/ShopComponent";
import { images } from "../../constants";

const Shop = () => {
  return (
    <section className="gap-both app__shop">
      <ShopComponent
        image={images.dress1_1}
        hoverImg={images.dress1_2}
        info={"Better Together T-Shirt Dress"}
        price={"$ 15.00"}
        link='/dresses-collections/better-together-t-shirt'
      />
      <ShopComponent
        image={images.dress4_1}
        hoverImg={images.dress4_2}
        info={"Steal My Heart Linen Tunic"}
        price={"$ 10.00"}
        link='/dresses-collections/steal-my-heart'
      />
      <ShopComponent
        image={images.defaultImg8}
        hoverImg={images.shoes8_2}
        info={"The Best Last Sneakers"}
        price={"$ 40.00"}
        link='/shoes-collections/last-sneakers'
      />
      <ShopComponent
        image={images.defaultImg3}
        hoverImg={images.shoes3_2}
        info={"Serena High Top Star Sneakers"}
        price={"$ 92.00"}
        link='/shoes-collections/senera-high-sneakers'
      />
    </section>
  );
};

export default Shop;
