// import { useState } from "react";
// import Shopping from "../../components/Shopping/Shopping";
// import { shoes } from "../../components/ShopData/ShopData";

// const colors = shoes[1].shoes2.description.productColor;
// const sizes = shoes[1].shoes2.description.productSize;
// const shoesItems = shoes[1].shoes2;

// const Shoes2 = () => {
//   let firstAbledSize;
//   let fistAbledColor;

//   for (let i = 0; i < sizes.length; i++) {
//     if (!sizes[i].sold) {
//       firstAbledSize = sizes[i].size;
//       break;
//     }
//   }
//   for (let i = 0; i < colors.length; i++) {
//     if (!colors[i].sold) {
//       fistAbledColor = colors[i].productColorInfo;
//       break;
//     }
//   }

// const [colorValue, setColorValue] = useState(fistAbledColor);
//   const [sizeValue, setSizeValue] = useState(firstAbledSize);
//   return (
//     <div>
//       <Shopping
//         items={shoesItems}
//         selectColor={setColorValue}
//         selectedColor={colorValue}
//         selectSize={setSizeValue}
//         selectedSize={Number(sizeValue)}
//       />
//     </div>
//   );
// };

// export default Shoes2;
