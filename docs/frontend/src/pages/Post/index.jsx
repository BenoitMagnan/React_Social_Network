import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextAreaForm } from '../../components/Forms';
import Header from '../../components/Header/Header';
import { useTheme } from '../../utils/hooks';
import { PostContainer, PostText } from './Post';

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
          {/* A FAIRE ! RESOUDRE LE PROBLEME DE DATA UNDEFINED */}
          {data.map((post, index) => (
            <PostContainer
              key={`${post.id}-${index}`}
              theme={theme}
              post={post}
            >
              <PostText theme={theme}>{post.text}</PostText>
              <PostText theme={theme}>{post.createdAt}</PostText>
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
          {/* A FAIRE ! RESOUDRE LE PROBLEME DE DATA UNDEFINED */}
          {data.map((post, index) => (
            <PostContainer
              key={`${post.id}-${index}`}
              theme={theme}
              post={post}
            >
              <PostText theme={theme}>{post.text}</PostText>
              <PostText theme={theme}>{post.createdAt}</PostText>
            </PostContainer>
          ))}
        </>
      );
    }
  }
}

export default Post;
