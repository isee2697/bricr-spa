import React from 'react';

import { render, act, wait, fireEvent } from 'tests';

import { ColumnModal } from './ColumnModal';

describe('ColumnModal', () => {
  test('render correctly', () => {
    const onClose = jest.fn();
    const onApply = jest.fn();

    const testColumns = [
      {
        value: 'name',
        hidden: false,
      },
      {
        value: 'sent',
        hidden: false,
      },
      {
        value: 'bounced',
        hidden: false,
      },
      {
        value: 'opened',
        hidden: false,
      },
      {
        value: 'event',
        hidden: false,
      },
    ];

    const { getByText } = render(<ColumnModal isOpened columns={testColumns} onApply={onApply} onClose={onClose} />);

    const closeButton = getByText('common.cancel');
    const applyButton = getByText('common.apply');

    expect(closeButton).toBeInTheDocument();
    expect(applyButton).toBeInTheDocument();

    act(() => {
      fireEvent.click(closeButton);
    });

    wait(() => {
      expect(onClose).toBeCalled();
    });

    act(() => {
      fireEvent.click(applyButton);
    });

    wait(() => {
      expect(onApply).toBeCalled();
    });
  });
});
