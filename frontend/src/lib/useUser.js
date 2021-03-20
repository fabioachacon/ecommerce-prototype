import { gql, useQuery } from "@apollo/react-hooks";

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    authenticatedUser {
      ... on User {
          id
          email
          name
      }
        #Query the cart once we have it.
      }
    }
`;

export const useUser = () => {
  const { data } = useQuery(CURRENT_USER_QUERY);
  return data?.authenticatedUser;
};