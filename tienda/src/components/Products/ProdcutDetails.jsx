import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/Dataprovider";
import { useParams } from "react-router-dom";
import ProductsItem from "./ProductsItem";

const ProdcutDetails = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;
  const [detail, setDetail] = useState([]);
  const [url, setUrl] = useState(0);
  const [images, setImages] = useState("");
  const params = useParams();
  let item = 0;

  useEffect(() => {
    products.forEach((product) => {
      item = 0;
      if (product.id === parseInt(params.id)) {
        setDetail(product);
        setUrl(0);
      }
    });
  }, [params.id, products]);

  useEffect(() => {
    const values = `${detail.img1}${url}${detail.img2}`;
    setImages(values);
  }, [url, params.id]);

  const handleInput = (e) => {
    const number = e.target.value.toString().padStart(2, "01");
    setUrl(number);
  };

  if (detail.length < 1) return null;

  return (
    <>
      {
        <div className='details'>
          <h2>{detail.title}</h2>
          <p className='price'>{detail.price}€</p>
          <div className='grid'>
            <p className='new'> Nuevo</p>
            <div className='size'>
              <select placeholder='tamaño'>
                <option value='36'>36</option>
                <option value='37'>37</option>
                <option value='38'>38</option>
                <option value='39'>39</option>
                <option value='40'>40</option>
                <option value='41'>41</option>
                <option value='42'>42</option>
                <option value='43'>43</option>
                <option value='44'>44</option>
                <option value='45'>45</option>
              </select>
              <p>Tamaño</p>
            </div>
          </div>
          <button onClick={() => addCart(detail.id)}>Añadir al carrito</button>
          {url ? (
            <img src={images} alt={detail.title} />
          ) : (
            <img src={detail.image} alt={detail.title} />
          )}

          <input
            type='range'
            min='1'
            max='36'
            value={url}
            onChange={handleInput}
          />
        </div>
      }

      <h2 className='related'>Productos relacionados</h2>
      <div className='products'>
        {products.map((product) => {
          if (item < 6 && detail.category === product.category) {
            item++;
            return (
              <ProductsItem
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                category={product.category}
                cantidad={product.cantidad}
              ></ProductsItem>
            );
          }
        })}
      </div>
    </>
  );
};

export default ProdcutDetails;
