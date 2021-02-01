import React from 'react';
import { HtmlExport } from 'react-email-editor';

import { EmailTemplate } from './EmailTemplate';

export const EmailTemplateContainer = () => {
  const onSave = async (data: HtmlExport) => {
    // here well save to backend
    return undefined;
  };

  return <EmailTemplate onSave={onSave} />;
};
