import { useEffect, useState } from 'react';

import { useLocale, useSnackbar } from 'hooks';

export const useShowError = () => {
  const { open: openSnackbar } = useSnackbar();
  const [currentMessage, setCurrentMessage] = useState();
  const { formatMessage } = useLocale();

  const showError = (message?: string) => {
    if (message !== currentMessage) {
      setCurrentMessage(message);

      message = formatMessage({ id: 'common.error' }, { message: message?.replace('GraphQL error: ', '') });
      openSnackbar({
        severity: 'error',
        message: message.length > 35 ? `${message.substring(0, 35)}...` : message,
        modalContent: message,
        modalTitle: formatMessage({ id: 'common.error' }, { message: '' }),
      });
    }
  };

  useEffect(() => {}, [currentMessage]);

  return showError;
};
