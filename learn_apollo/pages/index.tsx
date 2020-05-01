import React, { useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useMutation, useQuery } from '@apollo/react-hooks';

const SIGNIN_REQUEST = gql`
  mutation signin($name: String!, $password: String!) {
    signin(name: $name, password: $password) {
      refreshToken
      accessToken
      user {
        id
        name
        gender
      }
    }
  }
`;

const Index = () => {
  const [signin, { data }] = useMutation(SIGNIN_REQUEST);

  data && console.log(data);

  useEffect(() => {
    signin({ variables: { name: '조찬영', password: 'test' } });
  }, []);

  return <></>;
};

export default Index;
