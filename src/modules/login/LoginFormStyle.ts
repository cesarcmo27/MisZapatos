import { motion } from "framer-motion";
import { styled } from "styled-components";

export const FormContainer = styled(motion.div)`
  position: absolute;
  top: 80px;
  right: 20px;
  width: 300px;
  background-color: white;
  padding: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  z-index: 1000;
  box-sizing: border-box; /* Asegura que el padding no afecte el tamaño del contenedor */
  overflow: hidden; /* Previene el desbordamiento */
`;


export const Input = styled.input`
  width: calc(100% - 20px); /* Deja espacio para el padding */
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; /* Asegura que el padding esté incluido en el ancho total */
`;


export const Button = styled(motion.button)`
  width: 100%;
  padding: 10px;
  background-color: #000; /* Match the theme color */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const SocialButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* Centra los botones horizontalmente */
  gap: 10px; /* Añade un espacio entre los botones */
  margin-top: 10px;
`;


export const SocialButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px; /* Ajusta el ancho a tu preferencia */
  padding: 10px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  svg {
    margin-right: 10px;
  }
`;

