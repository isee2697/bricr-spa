import React, { useRef } from 'react';
import EmailEditor from 'react-email-editor';

import { Button } from 'ui/atoms';

import defaultTemplate from './DefaultTemplate.json';
import { useEditorCustomStyles } from './EmailTemplate.styles';
import { EmailTemplateProps } from './EmailTemplate.types';

export const EmailTemplate = ({ onSave }: EmailTemplateProps) => {
  const editorStyles = useEditorCustomStyles();
  const emailEditorRef = useRef<EmailEditor>(null);

  const exportHtml = () => {
    if (emailEditorRef?.current) {
      emailEditorRef.current.exportHtml(data => onSave(data));
    }
  };

  const onLoad = () => {
    emailEditorRef.current?.loadDesign(defaultTemplate);
  };

  return (
    <>
      <EmailEditor
        options={{
          displayMode: 'web',
          customJS: ["console.log('I am custom JS!');"],
          customCSS: editorStyles,
        }}
        minHeight={500}
        ref={emailEditorRef}
        onLoad={onLoad}
      />
      <Button variant="contained" color="primary" onClick={exportHtml}>
        Export HTML
      </Button>
    </>
  );
};
