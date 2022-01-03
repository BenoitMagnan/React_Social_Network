import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextAreaForm, CommentForm } from '../../components/Forms';
import Header from '../../components/Header/Header';
import { useTheme } from '../../utils/hooks';
import {
  ButtonHolder,
  Holder,
  PostContainer,
  PostHolder,
  PostText,
} from './Post';

import { DeleteButton } from '../../components/Buttons/Button';

function Post() {
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
  const [data, setData] = useState();
  const { theme } = useTheme();
  const cleanUp = new AbortController();
  const signal = cleanUp.signal;

  useEffect(() => {
    setTimeout(() => {
      axios
        .get('http://localhost:3000/api/post', {
          signal,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          setData(response.data.post);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 200);
    return () => cleanUp.abort();
  });

  if (isLoggedIn) {
    if (!data) {
      return (
        <>
          <Header />
          <div className="content">
            <h1>Post</h1>
            <TextAreaForm />
          </div>
        </>
      );
    } else if (data) {
      return (
        <>
          <Header />
          <div className="content">
            <h1>Post</h1>
            <TextAreaForm />
          </div>
          {data.map((post, index) => (
            <PostContainer
              key={`${post.id}-${index}`}
              theme={theme}
              post={post}
            >
              <Holder theme={theme}>
                <PostHolder>
                  <PostText theme={theme}>{post.text}</PostText>
                  <PostText theme={theme}>{post.createdAt}</PostText>
                  <PostText theme={theme}>{post.userId}</PostText>
                </PostHolder>
                <ButtonHolder theme={theme}>
                  <DeleteButton
                    theme={theme}
                    onClick={() => {
                      const token = localStorage.getItem('token');
                      const userId = localStorage.getItem('userId');

                      axios
                        .delete('http://localhost:3000/api/post', {
                          params: { id: post.id, userId: userId },
                          headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + token,
                          },
                        })
                        .then(() => {
                          console.log('Votre post à bien été supprimé');
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    }}
                  >
                    X
                  </DeleteButton>
                </ButtonHolder>
              </Holder>
              <CommentForm />
            </PostContainer>
          ))}
        </>
      );
    }
  } else {
    if (!data) {
      return (
        <>
          <Header />
          <div className="content">
            <h1>Posts à venir</h1>
          </div>
        </>
      );
    } else if (data) {
      return (
        <>
          <Header />
          <div className="content">
            <h1>Derniers posts partagés</h1>
          </div>
          {data.map((post, index) => (
            <PostContainer
              key={`${post.id}-${index}`}
              theme={theme}
              post={post}
            >
              <PostText theme={theme}>{post.text}</PostText>
              <PostText theme={theme}>{post.createdAt}</PostText>
              <PostText theme={theme}>{post.userId}</PostText>
            </PostContainer>
          ))}
        </>
      );
    }
  }
}

export default Post;
