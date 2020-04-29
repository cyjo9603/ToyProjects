import React from 'react';
import { Helmet } from 'react-helmet';
import { AppProps } from 'next/app';

interface Props {
  Component: AppProps['Component'];
}

const Main = ({ Component }: Props) => (
  <>
    <Helmet>
      <title>TOAST UI Editor</title>
    </Helmet>
    <Component />
  </>
);

export default Main;
