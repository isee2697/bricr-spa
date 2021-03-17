import React from 'react';

import { render, act, wait, fireEvent } from 'tests';

import { ConfirmModal } from './ConfirmModal';
import { ConfirmButtonType } from './ConfirmModal.types';

describe('ConfirmModal', () => {
  test('render correctly', () => {
    const onCancel = jest.fn();
    const onConfirm = jest.fn();

    const { getByText } = render(
      <ConfirmModal
        emoji="😬"
        isOpened={true}
        title={'Test Confirm Modal'}
        onCancel={onCancel}
        onConfirm={onConfirm}
        messageLineFirst={'First line message'}
        messageLineSecond={'Second line message'}
        cancelText={'No'}
        confirmText={'Yes'}
        confirmButtonType={ConfirmButtonType.ERROR}
      />,
    );

    expect(getByText('Test Confirm Modal')).toBeInTheDocument();
    expect(getByText('No')).toBeInTheDocument();
    expect(getByText('Yes')).toBeInTheDocument();
    expect(getByText('First line message')).toBeInTheDocument();
    expect(getByText('Second line message')).toBeInTheDocument();

    act(() => {
      fireEvent.click(getByText('No'));
    });

    wait(() => {
      expect(onCancel).toBeCalled();
    });

    act(() => {
      fireEvent.click(getByText('Yes'));
    });

    wait(() => {
      expect(onConfirm).toBeCalled();
    });
  });
});
