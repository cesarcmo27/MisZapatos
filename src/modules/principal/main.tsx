import React from 'react'
import { Button, HeroContainer, Logo, Subtitle } from './mainStyle'

export const MainComponent = () => {
    return (
        <HeroContainer>
          <Logo>cd</Logo>
          <Subtitle>CALZADO DEPORTIVO</Subtitle>
          <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            COMPRAR AHORA
          </Button>
        </HeroContainer>
      )
}
