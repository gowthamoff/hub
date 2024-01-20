/*********************************************************************
 *
 *    FarmwiseAI Private Limited
 *
 *    Module                 :  Mainpage Content Header
 *
 *    Usage                  :  Reuseable Header bar
 *
 *    Developed By and Date  :  Janagiraman - 21-11-2023
 *
 *    Modified By and Date   :  Mani - 28-12-2023
 *
 *    Version                :  1.0
 *
 **********************************************************************/
import React, { useEffect, useRef } from 'react';
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
 
const MyEditor = ({ onChange, data }) => {
  const editorInitialized = useRef(false);
  const editorInstance = useRef(null);
 
  useEffect(() => {
    if (!editorInitialized.current || editorInstance?.current?.getData() !== data) {
      if (editorInstance.current) {
        editorInstance.current.destroy();
      }
 
      const editor = ClassicEditor.create(document.querySelector('#app'), {
        plugins: [Essentials, Autoformat, Bold, Italic, BlockQuote, Heading, Link, List, Paragraph],
        toolbar: ['heading', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'undo', 'redo']
      })
        .then(editor => {
          editorInstance.current = editor;
          console.log(editor);
          console.log("data editor--->", data)
          data && editor.setData(data);
          editor.model.document.on('change', () => {
            console.log('Editor content changed:', editor.getData());
            onChange(editor.getData());
          });
        })
        .catch(error => {
          console.error(error);
        });
 
      editorInitialized.current = true;
    }
  }, [data]);
 
  return <div id="app"></div>;
};
 
export default MyEditor;