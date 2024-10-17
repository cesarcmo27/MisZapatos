import { motion } from "framer-motion";
import { styled } from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('${process.env.PUBLIC_URL}/images/fondo1~mv2.jpg'); /* Reemplaza con la imagen que estás usando */
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

export const CollectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //margin-top: 50px; // Add margin to separate from your hero content
  height: 60vh;
  width: 100%;
  overflow: hidden;
`;

export const ImageCard = styled(motion.div)`
  width: 508%; // Slightly less than 50% to add a small gap between the cards
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    filter: sepia(1.2);
  }
`;

export const OverlayText = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 24px;
  color: white;
  font-weight: bold;
`;