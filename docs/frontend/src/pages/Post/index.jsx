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
  CommentContainer,
  CommentText,
} from './Post';

import {
  CommentDeleteButton,
  DeleteButton,
} from '../../components/Buttons/Button';

function Post() {
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

  const userId = localStorage.getItem('userId');
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
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500);
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
                  <PostText theme={theme}>
                    {new Intl.DateTimeFormat('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                    }).format(new Date(post.createdAt))}
                  </PostText>
                  <PostText theme={theme}>{post.userId}</PostText>
                  {data[index].Comments.map((Comments, index) => (
                    <CommentContainer
                      key={`${Comments.id}-${index}`}
                      theme={theme}
                      Comments={Comments}
                    >
                      <CommentText
                        key={`${Comments.id}-${index}`}
                        theme={theme}
                      >
                        {Comments.text}
                        <div className="info">
                          <p>{Comments.userId}</p>
                          <p>
                            {new Intl.DateTimeFormat('fr-FR', {
                              year: 'numeric',
                              month: 'long',
                              day: '2-digit',
                              hour: '2-digit',
                              minute: '2-digit',
                            }).format(new Date(Comments.createdAt))}
                          </p>
                        </div>
                      </CommentText>
                      <ButtonHolder theme={theme}>
                        {userId === Comments.userId ? (
                          <CommentDeleteButton
                            theme={theme}
                            onClick={() => {
                              const token = localStorage.getItem('token');
                              const userId = localStorage.getItem('userId');

                              axios
                                .delete('http://localhost:3000/api/comment', {
                                  params: {
                                    id: Comments.id,
                                    userId: userId,
                                  },
                                  headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json',
                                    Authorization: 'Bearer ' + token,
                                  },
                                })
                                .then(() => {
                                  console.log(
                                    'Votre commentaire à bien été supprimé'
                                  );
                                })
                                .catch((error) => {
                                  console.log(error);
                                });
                            }}
                          >
                            X
                          </CommentDeleteButton>
                        ) : null}
                      </ButtonHolder>
                    </CommentContainer>
                  ))}
                </PostHolder>

                <ButtonHolder theme={theme}>
                  {userId === post.userId ? (
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
                  ) : null}
                </ButtonHolder>
              </Holder>
              <CommentForm postId={`${post.id}`} />
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
              <Holder theme={theme}>
                <PostHolder>
                  <PostText theme={theme}>{post.text}</PostText>
                  <PostText theme={theme}>
                    {new Intl.DateTimeFormat('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                    }).format(new Date(post.createdAt))}
                  </PostText>
                  <PostText theme={theme}>{post.userId}</PostText>
                  {data[index].Comments.map((Comments, index) => (
                    <CommentContainer
                      key={`${Comments.id}-${index}`}
                      theme={theme}
                      Comments={Comments}
                    >
                      <CommentText
                        key={`${Comments.id}-${index}`}
                        theme={theme}
                      >
                        {Comments.text}
                        <div className="info">
                          <p>{Comments.userId}</p>
                          <p>
                            {new Intl.DateTimeFormat('fr-FR', {
                              year: 'numeric',
                              month: 'long',
                              day: '2-digit',
                              hour: '2-digit',
                              minute: '2-digit',
                            }).format(new Date(Comments.createdAt))}
                          </p>
                        </div>
                      </CommentText>
                    </CommentContainer>
                  ))}
                </PostHolder>
              </Holder>
            </PostContainer>
          ))}
        </>
      );
    }
  }
}

export default Post;
