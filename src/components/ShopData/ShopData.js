import { images } from "../../constants";
import { v4 as uuidv4 } from "uuid";

export const shoes = [
  {
    shoes1: {
      id: uuidv4(),
      images: [
        {
          original: images.defaultImg1,
          thumbnail: images.defaultImg1,
        },
        {
          original: images.shoes1,
          thumbnail: images.shoes1,
        },
        {
          original: images.shoes2,
          thumbnail: images.shoes2,
        },
        {
          original: images.shoes3,
          thumbnail: images.shoes3,
        },
        {
          original: images.shoes4,
          thumbnail: images.shoes4,
        },
        {
          original: images.shoes5,
          thumbnail: images.shoes5,
        },
        {
          original: images.shoes6,
          thumbnail: images.shoes6,
        },
        {
          original: images.shoes7,
          thumbnail: images.shoes7,
        },
        {
          original: images.shoes8,
          thumbnail: images.shoes8,
        },
        {
          original: images.shoes9,
          thumbnail: images.shoes9,
        },
        {
          original: images.shoes10,
          thumbnail: images.shoes10,
        },
        {
          original: images.shoes11,
          thumbnail: images.shoes11,
        },
      ],
      description: {
        productName: "paula star sneakers",
        productPrice: 78.00,
        // productColorInfo: "color - light grey",
        productColor: [
          {
            color: "#aaa",
            sold: false,
            productColorInfo: "light grey",
          },
          { color: "orange", sold: true, productColorInfo: "black" },
          { color: "orange", sold: true, productColorInfo: "red" },
          { color: "orange", sold: false, productColorInfo: "orange" },
        ],
        productSize: [
          { size: 5.5, sold: true },
          { size: 6, sold: true },
          { size: 7, sold: false },
          { size: 7.5, sold: false },
          { size: 8, sold: false },
          { size: 8.5, sold: false },
          { size: 9, sold: false },
          { size: 10, sold: false },
          { size: 11, sold: true },
        ],
        productReady: ["In stock, ready to ship", "#54c63a"],
        productInfo:
          "The Paula Star Sneakers are here to make casual a little more glamorous! These trendy sneakers are designed with a faux suede with a white snakeskin star on the side. They have a rounded toe upper, and a classic lace-up front Style the Paula Star Sneakers with denim shorts and a graphic tee, or with a babydoll dress for a more girly look!",
        productInfo2: [
          "Faux Suede",
          "White Snakeskin Star On Side",
          "Lace-Up",
          "Rubber Sole",
          "Runs TTS",
        ],
      },
    },
  },
];
