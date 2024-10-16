import { motion } from "framer-motion";
import { styled } from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  margin: 20px;
  padding: 0 20px; /* Adds padding to the left and right */
  max-width: 1200px; /* Optional: limit the maximum width */
  margin-left: auto; /* Center the container */
  margin-right: auto; /* Center the container */
`;

export const ProductList = styled.div`
  flex: 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  /* Optionally, add padding to the ProductList if needed */
`;

export const ProductCard = styled(motion.div)`
  background-color: white;
  border: 1px solid #ddd;
  position: relative;
  padding: 10px;
  transition: all 0.3s ease;
  height: 200px;
  &:hover {
    transform: translateY(-10px); /* Mueve el producto hacia arriba al hacer hover */
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ProductTitle = styled.h3`
  font-size: 18px;
  margin-top: 10px;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  color: grey;
`;

export const AddToCartButton = styled(motion.button)`
  width: 100%; /* Make the button take the full width */
  background-color: red;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProductCard}:hover & {
    opacity: 1; /* Aparece el botón al hacer hover en el producto */
  }
`;


// Slider de precio
export const PriceSlider = styled.input`
  width: 100%;
`;

// Color Circles
export const ColorCircle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-right: 10px;
  cursor: pointer;
`;

export const ColorOptions = styled.div`
  display: flex;
  margin-top: 10px;
`;
