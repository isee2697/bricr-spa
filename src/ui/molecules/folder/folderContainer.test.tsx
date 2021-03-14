import React from 'react';

import { render } from '../../../tests';

import { FolderContainer } from './folderContainer';

describe('FolderContainer', () => {
  test('is in document', () => {
    const onClick = jest.fn();
    const onRemove = jest.fn();
    const onRename = jest.fn();
    const { getByTestId } = render(
      <FolderContainer
        id={'folder-1'}
        name={'Acquisition'}
        onClick={onClick}
        onRemove={onRemove}
        onRename={onRename}
      />,
    );
    const element = getByTestId('folder-container');

    expect(element).toBeInTheDocument();
  });
  test('is folder add icon in document', () => {
    const onClick = jest.fn();
    const onRemove = jest.fn();
    const onRename = jest.fn();
    const { getByTestId } = render(
      <FolderContainer
        id={'folder-1'}
        name={'Acquisition'}
        onClick={onClick}
        onRemove={onRemove}
        onRename={onRename}
        isAdd={true}
      />,
    );
    const element = getByTestId('bordered-icon');

    expect(element).toBeInTheDocument();
  });
});
