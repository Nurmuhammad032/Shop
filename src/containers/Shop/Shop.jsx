import "./Shop.scss";
import ShopComponent from "../../components/ShopComponent/ShopComponent";
import { images } from "../../constants";

const Shop = () => {
  return (
    <section className="gap-both app__shop">
      <ShopComponent
        image={images.dressView}
        hoverImg={images.dressHover}
        info={"paula star sneakers"}
        price={"$ 78.00"}
        link=';'
      />
      <ShopComponent
        image={images.dressView2}
        hoverImg={images.dressHover2}
        info={"happy days smiley face tee"}
        price={"$ 36.00"}
        link=';'
      />
      <ShopComponent
        image={images.dressView3}
        hoverImg={images.dressHover3}
        info={"on my way paperbag waist denim shorts"}
        price={"$ 36.00"}
        link=';'
      />
      <ShopComponent
        image={images.dressView4}
        hoverImg={images.dressHover4}
        info={"just breezed in kinomo"}
        price={"$ 44.00"}
        link=';'
      />
    </section>
  );
};

export default Shop;
