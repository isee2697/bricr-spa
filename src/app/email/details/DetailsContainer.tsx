import React from 'react';
import { useParams } from 'react-router-dom';

import { EMAILS } from 'api/mocks/email';
import { Email } from '../Email.types';

import { EmailDetails } from './Details';

export const EmailDetailsContainer = () => {
  const { emailId } = useParams<{ emailId: string }>();

  const email = EMAILS.find(item => item.id === emailId);

  return <EmailDetails email={email as Email} />;
};
