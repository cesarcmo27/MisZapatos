import { Button, CollectionContainer, HeroContainer, ImageCard, Logo, OverlayText, Subtitle } from './mainStyle'
import { useNavigate } from 'react-router-dom';

export const MainComponent = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <HeroContainer>
        <Logo>cd</Logo>
        <Subtitle>CALZADO DEPORTIVO</Subtitle>
        <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          COMPRAR AHORA
        </Button>
      </HeroContainer>
      {/* New collection section */}
      <CollectionContainer>
        {/* Collection for Men */}
        <ImageCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ backgroundImage: `url('/images/calzadoHombre.jpg')` }}
          onClick={() => navigate('/productos?categoria=hombre')}
        >
          <OverlayText>COLECCIÓN PARA HOMBRE</OverlayText>
        </ImageCard>

        {/* Collection for Women */}
        <ImageCard
          whileHover={{ scale: 1.05 }}path-to-your-image
          whileTap={{ scale: 0.95 }}
          style={{ backgroundImage: `url('/images/calzadoMujer.jpg')` }}
          onClick={() => navigate('/productos?categoria=mujer')}
        >
          <OverlayText>COLECCIÓN PARA MUJER</OverlayText>
        </ImageCard>
      </CollectionContainer>
    </>

  )
}
