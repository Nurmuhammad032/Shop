import "./Collections.scss";
import { useState } from "react";
import ShopComponent from "../../components/ShopComponent/ShopComponent";
import { Box } from "@mui/material";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Collections = ({ header, data }) => {
  const [product, setProduct] = useState("");
  const [sorted, setSorted] = useState(data);

  const handleChange = (event) => {
    setProduct(event.target.value);

    if (event.target.value == "fromHigh") {
      let sortPriceHigh = data.sort((a, b) => {
        if (a.description.productPrice < b.description.productPrice) {
          return 1;
        } else {
          return -1;
        }
      });
      setSorted(sortPriceHigh);
    }

    if (event.target.value == "fromLow") {
      let sortPriceLow = data.sort((a, b) => {
        if (a.description.productPrice > b.description.productPrice) {
          return 1;
        } else {
          return -1;
        }
      });
      setSorted(sortPriceLow);
    }

    if (event.target.value == "A-Z") {
      let sortPriceZA = data.sort((a, b) =>
        a.description.productName > b.description.productName ? 1 : -1
      );
      setSorted(sortPriceZA);
    }

    if (event.target.value == "Z-A") {
      let sortPriceZA = data.sort((a, b) =>
        a.description.productName > b.description.productName ? -1 : 1
      );
      setSorted(sortPriceZA);
    }
  };

  return (
    <>
        <div className="app__collections">
          <h1>{header}</h1>
          <div className="app__collections-sort">
            <p className="product-length">{data.length} products</p>
            <Box sx={{ minWidth: 120 }} className="sort-box">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Product</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={product}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"fromHigh"}>Price, high to low </MenuItem>
                  <MenuItem value={"fromLow"}>Price, low to high</MenuItem>
                  <MenuItem value={"A-Z"}>Alphabetically, A-Z</MenuItem>
                  <MenuItem value={"Z-A"}>Alphabetically, Z-A</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="app__collections-infos">
            {sorted.map((item, i) => (
              <ShopComponent
                key={i}
                image={item.images[0].original}
                hoverImg={item.images[1].thumbnail}
                info={item.description.productName}
                price={`$ ${item.description.productPrice}.00`}
                link={item.id}
              />
            ))}
          </div>
        </div>
    </>
  );
};

export default Collections;
