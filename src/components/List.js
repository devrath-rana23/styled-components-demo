import React from "react";
import styled, { css } from "styled-components";

const ListItem = styled.li`
  list-style-type: none;
  ${({ odd }) => {
    return odd
      ? css`
          background: orange;
          color: white;
        `
      : css`
          background: blue;
          color: black;
        `;
  }}
`;

const Products = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 99,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/1/1.jpg",
      "https://cdn.dummyjson.com/product-images/1/2.jpg",
      "https://cdn.dummyjson.com/product-images/1/3.jpg",
      "https://cdn.dummyjson.com/product-images/1/4.jpg",
      "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    ],
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 98,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/2/1.jpg",
      "https://cdn.dummyjson.com/product-images/2/2.jpg",
      "https://cdn.dummyjson.com/product-images/2/3.jpg",
      "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
    ],
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 102,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
    images: ["https://cdn.dummyjson.com/product-images/3/1.jpg"],
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: "OPPO",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/4/1.jpg",
      "https://cdn.dummyjson.com/product-images/4/2.jpg",
      "https://cdn.dummyjson.com/product-images/4/3.jpg",
      "https://cdn.dummyjson.com/product-images/4/4.jpg",
      "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
    ],
  },
];

const ProductListItem = styled.li`
  list-style-type: none;
  display: flex;
  ${({ price }) => {
    if (price <= 100) {
      return css`
        p {
          color: red;
        }
      `;
    }
    if (price <= 200) {
      return css`
        p {
          color: blue;
        }
      `;
    }
    return css`
      p {
        color: violet;
      }
    `;
  }}
`;
const List = () => {
  const fruits = ["orange", "banana", "apple"];
  return (
    <div>
      List
      <ul>
        {fruits.map((fruit, fruitIndex) => {
          return (
            <ListItem key={fruitIndex} odd={fruitIndex % 2 !== 0}>
              {fruit}
            </ListItem>
          );
        })}
      </ul>
      <h2>Products List</h2>
      {Products.map((product, productIndex) => {
        return (
          <ProductListItem
            price={product.price}
            key={`${productIndex}_${product.id}`}
          >
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </ProductListItem>
        );
      })}
    </div>
  );
};

export default List;
