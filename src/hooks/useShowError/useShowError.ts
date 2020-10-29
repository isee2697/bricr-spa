import { useState } from 'react';
import { DateTime } from 'luxon';

import { useLocale, useSnackbar } from 'hooks';

export const useShowError = () => {
  const { open: openSnackbar } = useSnackbar();
  const [messageHistory, setHistory] = useState<{ [key: string]: DateTime }>({});
  const { formatMessage } = useLocale();

  const showError = (message?: string) => {
    message = message ?? formatMessage({ id: 'common.unknown_error' });

    // wait for 10 seconds before showing same error again
    // this prevents invisible new errors and to many re-rendering
    const showMessage =
      !messageHistory[message] || (messageHistory[message] && messageHistory[message].diffNow('seconds').seconds < -10);

    if (showMessage) {
      setHistory(history => ({ ...history, [message as string]: DateTime.local() }));

      message = formatMessage({ id: 'common.error' }, { message: message?.replace('GraphQL error: ', '') });
      openSnackbar({
        severity: 'error',
        message: message.length > 35 ? `${message.substring(0, 35)}...` : message,
        modalContent: message,
        modalTitle: formatMessage({ id: 'common.error' }, { message: '' }),
      });
    }
  };

  return showError;
};
