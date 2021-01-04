import React from 'react';
import { useParams } from 'react-router-dom';

import { useModalDispatch, useModalState } from 'hooks';
import { useSendEmailMutation } from 'api/types';

import { ComposeNewEmailModal } from './ComposeNewEmailModal';
import { ComposeNewEmailBody } from './ComposeNewEmailModal.types';

export const ComposeNewEmailModalContainer = () => {
  const { isOpen } = useModalState('compose-new-email');
  const { close } = useModalDispatch();
  const [sendEmail] = useSendEmailMutation();
  const { inboxId } = useParams<{ inboxId: string }>();

  const handleSubmit = async ({ from, to, subject, body }: ComposeNewEmailBody) => {
    try {
      sendEmail({
        variables: {
          accountId: inboxId,
          input: {
            from: [
              {
                email: from,
                name: from,
              },
            ],
            to: [
              {
                email: to,
                name: to,
              },
            ],
            subject,
            body,
          },
        },
      });

      return true;
    } catch (error) {
      return false;
    } finally {
      close('compose-new-email');
    }
  };

  return <ComposeNewEmailModal isOpened={isOpen} onClose={() => close('compose-new-email')} onSubmit={handleSubmit} />;
};
