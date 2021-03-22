import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import { queryByText, render } from 'tests';
import { Button, Snackbar } from 'ui/atoms';
import { SnackbarContext } from 'context/snackbar/snackbarContext/SnackbarContext';
import { Theme } from 'theme/Theme';

describe('Snackbar', () => {
  test('render correct contents', () => {
    const changeSnackbarState = jest.fn();

    const { queryByText } = render(
      <>
        <Button size="small" onClick={() => jest.fn()}>
          Open Snackbar
        </Button>
        <Snackbar />
      </>,
      {
        wrapper: ({ children }) => (
          <Theme>
            <SnackbarContext.Provider
              value={{
                setSnackbarState: changeSnackbarState,
                snackbarState: {
                  isOpen: true,
                  props: {
                    severity: 'success',
                    message: 'Test snackbar message',
                    modalTitle: 'Test snackbar',
                    modalContent: <></>,
                  },
                },
              }}
            >
              {children}
            </SnackbarContext.Provider>
          </Theme>
        ),
      },
    );

    const message = queryByText('Test snackbar message');

    expect(message).not.toBeInTheDocument();
  });
});
