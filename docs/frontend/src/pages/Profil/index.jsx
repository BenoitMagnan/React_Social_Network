import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import Header from '../../components/Header/Header';
import { StyledButton } from '../../components/Buttons/Button';
import { InfosContainer, Infos } from './Profil';

import { useTheme, useUser } from '../../utils/hooks';

function Profil() {
  const [data, setData] = useState([]);
  const { toggleIsLoggedIn } = useUser();
  const { theme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    const cleanUp = new AbortController();
    const signal = cleanUp.signal;

    axios
      .get('http://localhost:3000/api/auth/profil', {
        signal,
        params: { userId: userId },
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => cleanUp.abort();
  }, []);

  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
  if (isLoggedIn) {
    return (
      <>
        <Header />
        <div className="content">
          <h1>Bonjour {data.firstName}</h1>
          <h2>Informations personnelles</h2>
          <InfosContainer theme={theme}>
            <Infos theme={theme}>
              <h3>Prénom :</h3>
              <p>{data.firstName}</p>
            </Infos>
            <Infos theme={theme}>
              <h3>Nom :</h3>
              <p>{data.lastName}</p>
            </Infos>
            <Infos theme={theme}>
              <h3>Adresse mail :</h3>
              <p>{data.email}</p>
            </Infos>
          </InfosContainer>
          <StyledButton
            className="delete"
            theme={theme}
            onClick={() => {
              const token = localStorage.getItem('token');
              const userId = localStorage.getItem('userId');

              axios
                .delete('http://localhost:3000/api/auth/delete', {
                  params: { userId: userId },
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token,
                  },
                })
                .then((response) => {
                  toggleIsLoggedIn();
                  alert(
                    "Votre compte a bien été supprimé, vous allez être redirigé vers la page d'accueil."
                  );
                  navigate('/home');
                  localStorage.clear();
                  setData(response.data[0]);
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            Suppression du compte
          </StyledButton>
        </div>
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
}

export default Profil;
