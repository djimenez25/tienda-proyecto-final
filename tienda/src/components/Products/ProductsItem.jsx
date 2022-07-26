import React, { useContext } from "react";
import "./Products.scss";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/Dataprovider";

const ProductsItem = ({ id, title, price, image, category }) => {
  const value = useContext(DataContext);
  const addCart = value.addCart;

  return (
    <div className='product'>
      <Link to={`/product/${id}`}>
        <div className='product__img'>
          <img src={image} alt={title} />
        </div>
      </Link>
      <div className='product__footer'>
        <h1>{title}</h1>
        <p>{category}</p>
        <p className='price'>{price}€</p>
      </div>
      <div className='button'>
        <button className='btn' onClick={() => addCart(id)}>
          Añadir al carrito
        </button>
        <div>
          <Link to={`/product/${id}`} className='btn'>
            Vista
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
