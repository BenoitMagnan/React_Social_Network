import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

import {
  FormLabel,
  FormInput,
  FormError,
  FormErrorMessage,
  FormButton,
  FormErrorHandler,
} from './Forms';

import { Comment, CommentButton, CommentError } from './Comment';

import { useTheme, useUser } from '../../utils/hooks';

function TextInput({ label, ...props }) {
  const [field, meta] = useField(props);
  const { theme } = useTheme();
  return (
    <>
      <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
      <FormInput theme={theme} className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <FormError>
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormError>
      ) : null}
    </>
  );
}

function CommentInput({ label, ...props }) {
  const [field, meta] = useField(props);
  const { theme } = useTheme();
  return (
    <>
      <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
      <FormInput theme={theme} className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <CommentError>
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </CommentError>
      ) : null}
    </>
  );
}

function validateEmail(value) {
  let error;

  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "L'adresse mail doit être valide";
  }

  return error;
}

export default function SignupForm() {
  const { theme } = useTheme();
  const { toggleIsLoggedIn } = useUser();
  const navigate = useNavigate();

  const cleanUp = new AbortController();
  const signal = cleanUp.signal;

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(2, 'Doit contenir au moins 2 charactères')
          .max(15, 'Ne doit pas dépasser 15 charactères')
          .required('Champs requis'),
        lastName: Yup.string()
          .min(2, 'Doit contenir au moins 2 charactères')
          .max(20, 'Ne doit pas dépasser 20 charactères')
          .required('Champs requis'),
        email: Yup.string()
          .email('Adresse mail invalide')
          .required('Champs requis'),
        password: Yup.string()
          .required('Champs requis')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
            'Obligatoire : 1 majucule + 1 minuscule + 1 symbole + 8 charactères minimum'
          ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(async () => {
          try {
            const response = await fetch(
              'http://localhost:3000/api/auth/signup',
              {
                signal,
                method: 'post',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  firstName: values.firstName,
                  lastName: values.lastName,
                  email: values.email,
                  password: values.password,
                }),
              }
            );
            if (response.status === 201) {
              const value = await response.json();
              toggleIsLoggedIn();
              localStorage.setItem('userId', value.userId);
              localStorage.setItem('token', value.token);
              navigate('/profil');
            } else if (response.status === 401) {
              document.getElementById('errorHandler').innerHTML =
                'Ce compte existe déjà !';
            }
          } catch (err) {
            console.log(err);
            document.getElementById('errorHandler').innerHTML =
              'Une erreur inattendue est survenue: " ' + err + ' "';
          }
          setSubmitting(false);
        }, 500);
        return () => cleanUp.abort();
      }}
    >
      <Form>
        <TextInput
          label="Prénom"
          name="firstName"
          type="text"
          placeholder="Prénom"
        />
        <TextInput label="Nom" name="lastName" type="text" placeholder="Nom" />
        <TextInput
          label="Email"
          name="email"
          type="text"
          placeholder="Adresse mail"
          validate={validateEmail}
        />
        <TextInput
          label="Mot de passe"
          name="password"
          type="password"
          placeholder="Mot de passe"
        />
        <FormErrorHandler id="errorHandler"></FormErrorHandler>
        <FormButton theme={theme} type="submit">
          Valider
        </FormButton>
      </Form>
    </Formik>
  );
}

function LoginForm() {
  const { theme } = useTheme();
  const { toggleIsLoggedIn } = useUser();

  const cleanUp = new AbortController();
  const signal = cleanUp.signal;

  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Adresse mail invalide')
          .required('Champs requis'),
        password: Yup.string()
          .required('Champs requis')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
            'Obligatoire : 1 majucule + 1 minuscule + 1 symbole + 8 charactères minimum'
          ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(async () => {
          try {
            const response = await fetch(
              'http://localhost:3000/api/auth/login',
              {
                signal,
                method: 'post',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  email: values.email,
                  password: values.password,
                }),
              }
            );
            const value = await response.json();
            if (response.status === 401) {
              document.getElementById('errorHandler').innerHTML = value.message;
            } else if (response.status === 500) {
              document.getElementById('errorHandler').innerHTML = value.message;
            } else if (response.status === 200) {
              toggleIsLoggedIn();
              localStorage.setItem('userId', value.userId);
              localStorage.setItem('token', value.token);
              navigate('/profil');
            }
          } catch (err) {
            console.log(err);
          }
          setSubmitting(false);
        }, 500);
        return () => cleanUp.abort();
      }}
    >
      <Form>
        <TextInput
          label="Email"
          name="email"
          type="text"
          placeholder="Adresse mail"
          validate={validateEmail}
        />
        <TextInput
          label="Mot de passe"
          name="password"
          type="password"
          placeholder="Mot de passe"
          // validate={validatePassword}
        />
        <FormErrorHandler id="errorHandler"></FormErrorHandler>
        <FormButton theme={theme} type="submit">
          Valider
        </FormButton>
      </Form>
    </Formik>
  );
}

function TextAreaForm() {
  const { toggleIsLoggedIn } = useUser();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const token = localStorage.getItem('token');

  const cleanUp = new AbortController();
  const signal = cleanUp.signal;

  return (
    <Formik
      initialValues={{ textArea: '' }}
      validationSchema={Yup.object({
        textArea: Yup.string()
          .min(5, 'Doit contenir au moins 5 charactères')
          .max(2000, 'Ne doit pas dépasser 2000 charactères')
          .required('Champs requis'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        const userId = localStorage.getItem('userId');
        setTimeout(async () => {
          try {
            const response = await fetch('http://localhost:3000/api/post', {
              signal,
              method: 'post',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
              },
              body: JSON.stringify({
                text: values.textArea,
                userId: userId,
              }),
            });
            const value = await response.json();
            if (response.status === 403) {
              toggleIsLoggedIn();
              localStorage.clear();
              navigate('/login');
            } else if (response.status === 201) {
              console.log(value.message);
            } else if (response.status === 500) {
              document.getElementById('postHolder').innerHTML = value.message;
            }
          } catch (err) {
            console.log(err);
            document.getElementById('errorHandler').innerHTML =
              'Une erreur inattendue est survenue: " ' + err + ' "';
          }
          setSubmitting(false);
        }, 500);
        return () => cleanUp.abort();
      }}
    >
      <Form>
        <TextInput
          label="Partage ta blague !"
          name="textArea"
          type="textarea"
          placeholder="C'est un gars, il rentre dans un bar."
        />
        <div id="postHolder"></div>
        <FormErrorHandler id="errorHandler"></FormErrorHandler>
        <FormButton theme={theme} type="submit">
          Valider
        </FormButton>
      </Form>
    </Formik>
  );
}

function CommentForm(props) {
  const { theme } = useTheme();
  const token = localStorage.getItem('token');

  const cleanUp = new AbortController();
  const signal = cleanUp.signal;

  return (
    <Formik
      initialValues={{ textArea: '' }}
      validationSchema={Yup.object({
        textArea: Yup.string()
          .min(5, 'Doit contenir au moins 5 charactères')
          .max(2000, 'Ne doit pas dépasser 2000 charactères')
          .required('Champs requis'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        const userId = localStorage.getItem('userId');
        setTimeout(async () => {
          try {
            const response = await fetch('http://localhost:3000/api/comment', {
              signal,
              method: 'post',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
              },
              body: JSON.stringify({
                text: values.textArea,
                userId: userId,
                PostId: parseInt(props.postId),
              }),
            });
            const value = await response.json();
            if (response.status === 200) {
              console.log(value.message);
            } else {
              document.getElementById('commentHolder').innerHTML =
                value.message;
            }
          } catch (err) {
            console.log(err);
            document.getElementById('errorHandler').innerHTML =
              'Une erreur inattendue est survenue: " ' + err + ' "';
          }
          setSubmitting(false);
        }, 500);
        return () => cleanUp.abort();
      }}
    >
      <Form style={{ width: '90%' }}>
        <div id="commentHolder"></div>
        <Comment theme={theme}>
          <h1>Commentaires :</h1>
          <CommentInput
            theme={theme}
            name="textArea"
            type="textarea"
            placeholder="Laissez votre commentaire"
          />
          <CommentButton theme={theme} type="submit">
            Envoyer
          </CommentButton>
        </Comment>
      </Form>
    </Formik>
  );
}

export { LoginForm, TextAreaForm, CommentForm };
