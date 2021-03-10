import React from 'react';

import { render, fireEvent } from 'tests';

import { Modal } from './Modal';

describe('Modal', () => {
  test('renders', () => {
    const onClose = jest.fn();

    const { getByText, getByRole } = render(
      <Modal isOpened title="Test Modal" onClose={onClose}>
        Test Content
      </Modal>,
    );

    const title = getByText('Test Modal');
    const content = getByText('Test Content');

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();

    fireEvent.click(getByRole('button'));

    expect(onClose).toHaveBeenCalled();
  });

  test('invisible when isOpened false', () => {
    const onClose = jest.fn();

    const { queryByText } = render(
      <Modal isOpened={false} title="Test Modal" onClose={onClose}>
        Test Content
      </Modal>,
    );

    expect(queryByText('Test Content')).toBeNull();
  });
});
