import React from 'react';
import { PageAnimation } from '../../animations';
import { PageContainer, PageTitle } from '../../components/MainStyles';
import { PageArea } from './styled';
import { gql } from 'apollo-boost';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { CURRENT_USER_QUERY, useUser } from '../../lib/useUser';
import { useForm } from '../../lib/useForm';
import { storeCookie } from '../../lib/AuthHandler';
import { useHistory } from 'react-router-dom';


const SIGNIN_MUTATION = gql`
    mutation SIGNIN_MUTATION($email: String!, $password: String!){
        authenticateUserWithPassword(email: $email, password: $password){
            token
            item {
                id
                name
                email
            }
        }
    }
`;

const SignIn = () => {
    const { inputs, handleChange, clearForm } = useForm();
    const history = useHistory();

    const [signIn, { loading, client, error }] = useMutation(SIGNIN_MUTATION, {
        variables: inputs,
        onCompleted: async (data) => {
            // localStorage.setItem('token', data?.authenticateUserWithPassword.token)
            storeCookie(data?.authenticateUserWithPassword.token);
            await client.clearStore();
        },
        onError: console.error
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!loading) {
          await signIn();
          history.push('/');
          history.go(0);
        }
        clearForm();
    }

    return (
        <PageContainer
            variants={PageAnimation}
            initial='hidden'
            animate='visible'
            exit='exit'>
          <PageTitle>Entrar.</PageTitle>
          <PageArea>
            <fieldset disabled={loading}>
                <form onSubmit={handleSubmit} method="POST">
                    <label htmlFor="email">
                        <div>E-mail</div>
                        <input
                            name='email'
                            type='email'
                            value={inputs.email}
                            onChange={handleChange}
                            required
                            />
                    </label>
                    <label htmlFor="password">
                        <div>Senha</div>
                        <input
                            name='password'
                            type='password'
                            value={inputs.password}
                            onChange={handleChange}
                            required
                            />
                    </label>
                    <button type='submit'>Entrar</button>
                </form>
            </fieldset>
          </PageArea>
        </PageContainer>
    )
}

export default SignIn;
