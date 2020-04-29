import React from 'react';
import dynamic, { noSSR } from 'next/dynamic';

const Editor = dynamic(() => import('../components/Editor'));

const Main = () => {
  return (
    <>
      <Editor />
    </>
  );
};
export default Main;
