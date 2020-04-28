import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import dynamic, { LoaderComponent } from 'next/dynamic';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

const Editor: any = dynamic(() => import('@toast-ui/react-editor').then((mod) => mod.Editor) as any, {
  ssr: false,
});

const Main = () => {
  const editorRef = useRef<any>(null);

  const handleClick = () => {
    if (editorRef.current) {
      editorRef.current.getInstance().exec('Bold');
    }
  };

  return (
    <>
      <Helmet>
        <title>TOAST UI Editor</title>
      </Helmet>
      <Editor previewStyle="vertical" height="400px" initialEditType="markdown" initialValue="hello" ref={editorRef} />
      <button onClick={handleClick}>make bold</button>
    </>
  );
};

export default Main;
