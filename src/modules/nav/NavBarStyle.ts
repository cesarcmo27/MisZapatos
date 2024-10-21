import styled from "styled-components"

interface NavLinksProps {
  isOpen: boolean; // Define que la prop isOpen es un boolean
}

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  background-color: black;
  color: white;
  font-family: 'Arial', sans-serif;

  @media (max-width: 768px) {
    flex-direction: row; /* Cambia a columna en móviles */
    align-items: flex-start; /* Alinea a la izquierda en móviles */
  }
`;


export const NavLinks = styled.div<NavLinksProps>`
  display: flex;
  gap: 25px;
  font-size: 1rem;
  margin-left: 80px;

  a {
    color: white;
    text-decoration: none;
    font-weight: normal;
    transition: color 0.3s ease;

    &:hover {
      color: #f0a500;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; /* Usa isOpen de las props */
    width: 100%;
    text-align: center;
    margin-top: 10px; /* Espacio entre el menú y los íconos */
  }
`;


export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: lowercase;
  color: white;

  img {
    width: 50px; /* Tamaño normal del logo */
    height: auto;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Ajusta el tamaño del texto en móviles */
    
    img {
      width: 40px; /* Reduce el tamaño del logo en móviles */
    }
  }
`;


export const Icons = styled.div`
  display: flex;
  gap: 15px;
  color: #f0a500;
  margin-left: auto; /* Alinea los íconos a la derecha */

  svg {
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: white;
    }
  }

  @media (max-width: 768px) {
    order: 2; /* Mantiene los íconos después del menú de hamburguesa */
    align-self: flex-end; /* Alinea los íconos a la derecha en móviles */
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    align-self: flex-end; /* Alinea el ícono de menú a la derecha en móviles */
  }
`;
