import React from 'react';

import { render } from '../../../../tests';

import { FolderIcon } from './FolderIcon';

describe('Folder', () => {
  test('is in document', () => {
    const { getByTestId } = render(
      <FolderIcon id={'folder-3_primary'} variant={'aqua'} weight={1} className={'makeStyles-icon-2457'} />,
    );
    const element = getByTestId('folder-icon-path');

    expect(element).toBeInTheDocument();
  });
  test('renders aqua color', () => {
    const { getByTestId } = render(
      <FolderIcon id={'folder-3_primary'} variant={'aqua'} weight={1} className={'makeStyles-icon-2457'} />,
    );
    const element = getByTestId('folder-icon-path');

    expect(element).toHaveAttribute('fill', '#97DCFD');
  });
  test('renders purple color', () => {
    const { getByTestId } = render(
      <FolderIcon id={'folder-3_primary'} variant={'purple'} weight={1} className={'makeStyles-icon-2457'} />,
    );
    const element = getByTestId('folder-icon-path');

    expect(element).toHaveAttribute('fill', '#D7DBFA');
  });
});
