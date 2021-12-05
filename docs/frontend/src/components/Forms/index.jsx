import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import {
  FormLabel,
  FormInput,
  FormError,
  FormErrorMessage,
  FormButton,
} from './Forms';
import { useTheme } from '../../utils/hooks';

// FOR FURTHER USE
// https://formik.org/docs/tutorial#leveraging-react-context
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
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(2, 'Doit contenir au moins 3 charactères')
          .max(15, 'Ne doit pas dépasser 15 charactères')
          .required('Champs requis'),
        lastName: Yup.string()
          .min(2, 'Doit contenir au moins 3 charactères')
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
        setTimeout(() => {
          localStorage.clear('signup');
          localStorage.setItem('signup', JSON.stringify(values));
          console.log(localStorage);
          setSubmitting(false);
        }, 400);
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
          // validate={validatePassword}
        />
        <FormButton theme={theme} type="submit">
          Valider
        </FormButton>
      </Form>
    </Formik>
  );
}

function LoginForm() {
  const { theme } = useTheme();
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
        setTimeout(() => {
          localStorage.clear('login');
          localStorage.setItem('login', JSON.stringify(values));
          console.log(localStorage);
          setSubmitting(false);
        }, 400);
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
        <FormButton theme={theme} type="submit">
          Valider
        </FormButton>
      </Form>
    </Formik>
  );
}

function TextAreaForm() {
  const { theme } = useTheme();
  return (
    <Formik
      initialValues={{ textArea: '' }}
      validationSchema={Yup.object({
        textArea: Yup.string()
          .min(5, 'Doit contenir au moins 2 charactères')
          .max(140, 'Ne doit pas dépasser 140 charactères')
          .required('Champs requis'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          localStorage.clear('post');
          localStorage.setItem('post', JSON.stringify(values));
          // A REMPLACER PAR LE BACKEND
          document.getElementById('postHolder').innerHTML += JSON.parse(
            localStorage.getItem('post')
          ).textArea;
          setSubmitting(false);
        }, 400);
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
        <FormButton theme={theme} type="submit">
          Valider
        </FormButton>
      </Form>
    </Formik>
  );
}

export { LoginForm, TextAreaForm };
