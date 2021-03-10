import React from 'react';

import { render, fireEvent } from 'tests';

import { DocumentViewModal } from './DocumentViewModal';

describe('DocumentViewModal', () => {
  const documents = [{ uri: 'https://hello.nl/myimage.jpg' }];
  test('renders', () => {
    const onClose = jest.fn();

    const { getByText, getByRole } = render(<DocumentViewModal documents={documents} isOpened onClose={onClose} />);

    const title = getByText('common.files.preview.title');
    const content = getByText('myimage.jpg');

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();

    fireEvent.click(getByRole('button'));

    expect(onClose).toHaveBeenCalled();
  });
});
