import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { Icons, Logo, NavLinks, NavbarContainer } from "./NavBarStyle";
import LoginForm from '../login/loginForm';


export const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin); // Toggle login form
  };

  return (
    <>
      <NavbarContainer>
        <Logo>
          <img src="/images/chabelogo.png" alt="Chabelas Logo" />
          chabelas calzado
        </Logo>
        <NavLinks>
          <Link to="/">Inicio</Link>
          <Link to="/tienda">Tienda</Link>
          <Link to="/sobre-cd">Sobre CD</Link>
          <Link to="/servicio-cliente">Servicio al Cliente</Link>
        </NavLinks>
        <Icons>
          <FaUser size={20} onClick={handleLoginClick} style={{ cursor: 'pointer' }} />
          <FaShoppingCart size={20} />
        </Icons>
      </NavbarContainer>
      {showLogin && <LoginForm />} {/* Render the login form if showLogin is true */}
    </>
  );
};
