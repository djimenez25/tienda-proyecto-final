import React, { useContext } from "react";
import "./Header.scss";
import Nike from "../../images/Nike.jpg";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/Dataprovider";

const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [cart] = value.cart;

  const toogleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header>
      <Link to='/'>
        <div className='logo'>
          <img src={Nike} alt='logo' />
        </div>
      </Link>
      <ul>
        <li>
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to='/products'>Productos</Link>
        </li>
      </ul>
      <div className='carro' onClick={toogleMenu}>
        <box-icon name='cart'></box-icon>
        <span className='item__total'>{cart.length}</span>
      </div>
    </header>
  );
};

export default Header;
