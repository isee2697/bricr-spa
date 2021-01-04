import React from 'react';
import { useParams } from 'react-router-dom';

import { Email } from '../Email.types';
import { useGetEmailQuery } from 'api/types';
import { Loader } from 'ui/atoms';

import { EmailDetails } from './Details';
import { EmailDetailsContainerProps } from './Details.types';

export const EmailDetailsContainer = (props: EmailDetailsContainerProps) => {
  const { inboxId, emailId } = useParams<{ inboxId: string; emailId: string }>();
  const { data } = useGetEmailQuery({ variables: { accountId: inboxId, emailId: emailId } });

  if (!data?.getEmail) {
    return <Loader />;
  }

  return <EmailDetails email={data.getEmail as Email} {...props} />;
};
