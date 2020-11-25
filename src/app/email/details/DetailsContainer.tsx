import React from 'react';
import { useParams } from 'react-router-dom';

import { Email } from '../Email.types';
import { useGetEmailQuery } from 'api/types';
import { Loader } from 'ui/atoms';

import { EmailDetails } from './Details';

export const EmailDetailsContainer = () => {
  const { emailId } = useParams<{ emailId: string }>();
  const { data } = useGetEmailQuery({ variables: { id: emailId } });

  if (!data?.getEmail) {
    return <Loader />;
  }

  return <EmailDetails email={data.getEmail as Email} />;
};
