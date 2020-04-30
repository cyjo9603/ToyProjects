import React, { useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Editor = () => {
  const [content, setContent] = useState('');

  const showContent = () => {
    console.log(content);
  };

  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onInit={(editor: any) => {
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event: any, editor: any) => {
          setContent(editor.getData());
        }}
      />
      <button onClick={showContent}>GET CONTENT</button>
    </>
  );
};

export default Editor;
