import { motion } from "framer-motion";
import { styled } from "styled-components";

// Contenedor principal del carrito
export const CartContainer = styled(motion.div)`
position: fixed;
top: 0;
right: 0;
width: 350px;
height: 100vh;
background-color: white;
box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.3);
z-index: 1000;
display: flex;
flex-direction: column;

@media (max-width: 768px) {
    width: 100%; /* El carrito ocupará todo el ancho en pantallas pequeñas */
  }
`;

// Encabezado del carrito con degradado rojo
export const CartHeader = styled.div`
  background: linear-gradient(45deg, #ff0000, #ff7f7f);
  padding: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 15px;
    h2 {
      font-size: 1.2rem;
    }
  }
`;

// Contenedor de productos seleccionados
export const CartContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #fff;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

// Producto individual
export const ProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

   @media (max-width: 768px) {
    margin-bottom: 8px;
  }
`;

// Información del producto
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

// Nombre del producto
export const ProductName = styled.span`
  font-weight: bold;
`;

// Precio del producto
export const ProductPrice = styled.span`
  color: #888;
`;

// Botón de eliminar
export const RemoveButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: darkred;
  }

  @media (max-width: 768px) {
    padding: 5px;
    font-size: 0.9rem;
  }
`;

// Footer del carrito con el total
export const CartFooter = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-top: 1px solid #eee;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

// Total a pagar
export const TotalAmount = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 8px;
  }
`;

// Botón de checkout
export const CheckoutButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: darkred;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 0.9rem;
  }
`;

// Mensaje de carrito vacío
export const EmptyMessage = styled.p`
  text-align: center;
  color: #888;
`;
export const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background: rgba(0, 0, 0, 0.5);
z-index: 999; /* Debe estar detrás del carrito */
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #ccc;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;