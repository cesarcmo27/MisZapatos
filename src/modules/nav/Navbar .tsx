import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';
import { NavbarContainer, Logo, NavLinks, Icons, HamburgerIcon } from './NavBarStyle';
import LoginForm from '../login/loginForm';
import { ShoppingCart } from '../../components/Cart/ShoppingCart';

export const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú móvil

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alternar el estado del menú móvil
  };

  return (
    <>
      <NavbarContainer>
        <Logo>
          <img src={`${process.env.PUBLIC_URL}/images/chabelogo.png`} alt="Chabelas Logo" />
          Ysi
        </Logo>
        <NavLinks isOpen={menuOpen}>
          <Link to="/" onClick={toggleMenu}>Inicio</Link>
          <Link to="/tienda" onClick={toggleMenu}>Tienda</Link>
          <Link to="/servicio-cliente" onClick={toggleMenu}>Contacto</Link>
        </NavLinks>
        <Icons>
          <FaUser size={20} onClick={handleLoginClick} />
          <FaShoppingCart size={20} onClick={handleCartClick} />
          <HamburgerIcon onClick={toggleMenu}>
            <FaBars size={25} />
          </HamburgerIcon>
        </Icons>
      </NavbarContainer>
      {showLogin && <LoginForm />} {/* Renderiza el formulario de login si está activado */}
      <ShoppingCart isOpen={showCart} onClose={handleCartClick} />
    </>
  );
};
