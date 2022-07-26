import React from "react";
import Portada from "../../images/inicio.jpg";
import { Link } from "react-router-dom";
import "./Init.scss";

const Init = () => {
  return (
    <div className='inicio'>
      <Link to='/'>
        <h1>Inicio</h1>
      </Link>
      <Link to='/Products'>
        <h1>Productos</h1>
      </Link>
      <img src={Portada} alt='inicio' />
    </div>
  );
};

export default Init;
