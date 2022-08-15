import Collections from "../Collections/Collections";
import { dresses } from "../../components/ShopData/ShopData";

const DressesCollection = () => {

  return (
    <div>
      <Collections header={"Dresses"} data={dresses} />
    </div>
  );
};

export default DressesCollection;