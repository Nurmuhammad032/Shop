import Collections from "../Collections/Collections";
import { shoes } from "../../components/ShopData/ShopData";

const ShoesCollection = () => {

  return (
    <div>
      <Collections header={"Shoes"} data={shoes} />
    </div>
  );
};

export default ShoesCollection;
