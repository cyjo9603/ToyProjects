import React from 'react';
import { AppProps, AppContext } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

App.getInitialProps = async ({ ctx, Component }: AppContext) => {
  const pageProps = await Component.getInitialProps?.(ctx);
  return { pageProps };
};

export default App;
