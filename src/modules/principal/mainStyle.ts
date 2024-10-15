import { motion } from "framer-motion";
import { styled } from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('/images/fondo1~mv2.jpg'); /* Reemplaza con la imagen que estás usando */
  background-size: cover;
  background-position: center;
`;

export const Logo = styled.h1`
  font-size: 8rem;
  font-weight: bold;
  color: white;
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  color: white;
  margin-bottom: 20px;
`;

export const Button = styled(motion.button)`
  padding: 10px 20px;
  font-size: 1.5rem;
  color: black;
  background-color: white;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease-in;
  
  &:hover {
    transform: scale(1.05);
  }
`;