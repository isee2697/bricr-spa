import React from 'react';

import { useSnackbar } from 'hooks';
import { render } from 'tests';
import { Button, Snackbar } from 'ui/atoms';
import { AppProviders } from 'providers/AppProviders';

describe('Snackbar', () => {
  const { open: openSnackbar } = useSnackbar();

  const renderComponent = () => {
    return (
      <AppProviders>
        <Button
          size="small"
          onClick={() =>
            openSnackbar({
              severity: 'success',
              message: 'Test snackbar message',
              modalTitle: 'Test snackbar',
              modalContent: <></>,
              onUndo: () => {},
            })
          }
        >
          Open Snackbar
        </Button>
        <Snackbar />
      </AppProviders>
    );
  };

  test('render correct contents', () => {
    const { open: openSnackbar } = useSnackbar();

    const { container, getByText } = render(renderComponent());

    const button = getByText('Open Snackbar');
  });
});
