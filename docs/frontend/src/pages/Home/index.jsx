import React from 'react';
import Header from '../../components/Header/Header';
import { useTheme } from '../../utils/hooks';
import { StyledLink } from '../../utils/style/globalStyle';

function Home() {
  const { theme } = useTheme();
  return (
    <>
      <Header />
      <div className="content">
        <h1>Bienvenue à la maison</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          aliquid aliquam sapiente <em>debitis ratione neque</em> aut
          repellendus vel vitae facere exercitationem impedit earum, vero magni
          ex adipisci id sunt ut! <mark>Consequatur pariatur odit beatae?</mark>{' '}
          Pariatur quo, temporibus velit dicta ea dignissimos, vero beatae quas
          voluptatum cum mollitia magni assumenda placeat.
        </p>
        <p>
          Lorem ipsum dolor sit <strong>amet consectetur</strong>, adipisicing
          elit. Minima aliquid aliquam sapiente debitis ratione neque aut
          repellendus vel vitae{' '}
          <StyledLink to="/about" aria-label="Test de lien" theme={theme}>
            bichtéré
          </StyledLink>{' '}
          facere exercitationem impedit earum, vero magni ex adipisci id sunt
          ut! Consequatur pariatur odit beatae? Pariatur quo, temporibus velit
          dicta ea dignissimos, vero beatae quas voluptatum cum mollitia magni
          assumenda placeat.
        </p>
        <h2>Lorem ipsum dolor sit amet consectetur !</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          aliquid aliquam sapiente debitis ratione neque aut repellendus vel
          vitae facere exercitationem impedit earum, vero magni ex adipisci id
          sunt ut! Consequatur pariatur odit beatae? Pariatur quo, temporibus
          velit dicta ea dignissimos, vero beatae quas voluptatum cum mollitia
          magni assumenda placeat.
        </p>
      </div>
    </>
  );
}

export default Home;
