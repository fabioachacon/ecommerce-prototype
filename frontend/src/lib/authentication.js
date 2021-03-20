import React, { createContext, useContext, useState } from 'react';
import { gql, useQuery, useMutation, useApolloClient } from '@apollo/client';



export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const userFragment = `
    id
    name
    isAdmim
`

const USER_QUERY = gql`
    query {
        authenticatedUser {
            ${userFragment}
        }
    }
`;

const AUTH_MUTATION = gql`
    mutation signin($email: String!, $password: String!){
        item {
            ${userFragment}
        }
    }
`;

const UNAUTH_MUTATION = gql`
  mutation {
    unauthenticateUser {
      success
    }
  }
`;


export const AuthProvider = ({ childre, initialUserState }) => {
    const [user, setUser] = useState(initialUserState);
    const client = useApolloClient();

    const { loading: userLoading } = useQuery(USER_QUERY , {
        fetchPolicy: 'no-cache',
        onCompleted:  ({ authenticatedUser, error }) => {
            if (error) {
                throw error;
            }

            setUser(authenticatedUser);
        },
        onError: console.error
    });

    
}   