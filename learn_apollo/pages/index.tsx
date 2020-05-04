import React, { useState, ChangeEvent } from 'react';
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

const GET_USERINFO = gql`
  query {
    user {
      id
      name
      gender
      Friends {
        name
      }
    }
  }
`;

const Index = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error, data, client } = useQuery(GET_USERINFO);
  const [signin] = useMutation(SIGNIN_REQUEST, {
    update(cache, { data: { signin } }) {
      localStorage.setItem('accessToken', signin.accessToken);
      localStorage.setItem('refreshToken', signin.refreshToken);

      const { user } = data ? cache.readQuery({ query: GET_USERINFO }) : { user: null };

      client.writeData({ data: { ...user, ...signin.user } });
    },
  });

  data && console.log({ loading, error, data });

  const onSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    signin({ variables: { name, password } });
  };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <form onSubmit={onSignIn}>
        <input type="text" placeholder="이름" value={name} onChange={onChangeName} />
        <input type="password" placeholder="비밀번호" value={password} onChange={onChangePassword} />
        <button type="submit">로그인</button>
      </form>
      <div>
        <p>{data && data.user.name}</p>
        <p>{data && data.user.gender}</p>
      </div>
    </>
  );
};

export default Index;
