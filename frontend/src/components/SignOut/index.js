import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React from 'react';
import { SignOutButton } from './styled';
import { useHistory } from 'react-router-dom';

const SIGOUT_MUTATION = gql`
    mutation {
        unauthenticateUser {
            success
        }
}
`;

const SignOut = () => {
    const history = useHistory();
    const [signout, { loading }] = useMutation(SIGOUT_MUTATION);

    const handleSignOut = async (e) => {
        await signout();

        if (!loading) {
            history.push('/');
            history.go(0);
        }
    }

    return (
        <>
          <SignOutButton onClick={handleSignOut}>
                Sair
          </SignOutButton>
        </>
    )
}

export default SignOut;
