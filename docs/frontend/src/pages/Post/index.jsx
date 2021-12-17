import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextAreaForm } from '../../components/Forms';
import Header from '../../components/Header/Header';
import { useTheme } from '../../utils/hooks';
import { PostContainer, PostText } from './Post';

function Post() {
  const [data, setData] = useState();
  const { theme } = useTheme();

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/post', {
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
  }, []);

  return (
    <>
      <Header />
      <div className="content">
        <h1>Post</h1>
        <TextAreaForm />
      </div>
      {/* A FAIRE ! RESOUDRE LE PROBLEME DE DATA UNDEFINED */}
      {data.map((post, index) => (
        <PostContainer theme={theme}>
          <PostText key={`${post.userId}-${index}`} theme={theme}>
            {post.text}
          </PostText>
        </PostContainer>
      ))}
    </>
  );
}

export default Post;
