import styled from "styled-components"

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  background-color: black;
  color: white;
  font-family: 'Arial', sans-serif;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 25px;
  font-size: 1rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: normal;
    transition: color 0.3s ease;

    &:hover {
      color: #f0a500;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: lowercase;
  color: white;
  margin-left: 100px;

  /* Simula la línea que atraviesa las letras */
  position: relative;

  img {
    width: 50px; /* Puedes ajustar el tamaño de la imagen aquí */
    height: auto;
    margin-right: 10px; /* Espacio entre la imagen y el texto */
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 15px;
  color: #f0a500;

  svg {
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: white;
    }
  }
`;
