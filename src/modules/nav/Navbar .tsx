import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { Icons, Logo, NavLinks, NavbarContainer } from "./NavBarStyle";
import LoginForm from '../login/loginForm';
import { ShoppingCart } from '../../components/Cart/ShoppingCart';


export const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin); // Toggle login form
  }

  const handleCartClick = () => {
    setShowCart(!showCart);
  }

  return (
    <>
      <NavbarContainer>
        <Logo>
          <img src={`${process.env.PUBLIC_URL}/images/chabelogo.png`} alt="Chabelas Logo" />
          Calzados Ysi
        </Logo>
        <NavLinks>
          <Link to="/">Inicio</Link>
          <Link to="/tienda">Tienda</Link>
          <Link to="/sobre-cd">Sobre CD</Link>
          <Link to="/servicio-cliente">Servicio al Cliente</Link>
        </NavLinks>
        <Icons>
          <FaUser size={20} onClick={handleLoginClick} style={{ cursor: 'pointer' }} />
          <FaShoppingCart size={20} onClick={handleCartClick} style={{ cursor: 'pointer' }} />
        </Icons>
      </NavbarContainer>
      {showLogin && <LoginForm />} {/* Render the login form if showLogin is true */}
      <ShoppingCart
        isOpen={showCart}
        onClose={handleCartClick}

      />
    </>
  );
};
