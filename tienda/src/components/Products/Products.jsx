import React from "react";
import "./Products.scss";
import { DataContext } from "../Context/Dataprovider";
import { useContext } from "react";
import ProductsItem from "./ProductsItem";

export const Products = () => {
  const value = useContext(DataContext);
  const [products] = value.products;

  return (
    <>
      <h1 className='title'>Productos</h1>
      <div className='products'>
        {products.map((product) => (
          <ProductsItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            category={product.category}
            cantidad={product.cantidad}
          ></ProductsItem>
        ))}
      </div>
    </>
  );
};

export default Products;
