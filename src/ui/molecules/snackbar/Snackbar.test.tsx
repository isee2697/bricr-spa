import React, { useState } from 'react';

import { render, act, fireEvent, wait } from 'tests';
import { Button, Snackbar } from 'ui/atoms';
import { SnackbarContext } from 'context/snackbar/snackbarContext/SnackbarContext';

const MockSnackBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SnackbarContext.Provider
      value={{
        setSnackbarState: () => setIsOpen(!isOpen),
        snackbarState: {
          isOpen: isOpen,
          props: {
            severity: 'success',
            message: 'Test snackbar message',
            modalTitle: 'Test snackbar',
            modalContent: <></>,
            onUndo: () => {},
          },
        },
      }}
    >
      <Button size="small" onClick={() => setIsOpen(true)}>
        Open Snackbar
      </Button>
      <Snackbar />
    </SnackbarContext.Provider>
  );
};

describe('Snackbar', () => {
  test('render correct contents', () => {
    const { queryByText, getByText } = render(<MockSnackBar />);

    const message = queryByText('Test snackbar message');

    expect(message).not.toBeInTheDocument();

    act(() => {
      fireEvent.click(getByText('Open Snackbar')!);
    });

    wait(() => {
      expect(message).toBeInTheDocument();
    });
  });
});
