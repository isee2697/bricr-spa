import React from 'react';

import { fireEvent, render } from 'tests';

import { FolderContainer } from './FolderContainer';

describe('FolderContainer', () => {
  test('render correctly', () => {
    const onClick = jest.fn();

    const { container } = render(<FolderContainer id="primary-folder" name="Primary Folder" onClick={onClick} />);

    fireEvent.click(container.querySelector('svg')!);

    expect(onClick).toBeCalled();
  });

  test('render remove badge', () => {
    const onRemove = jest.fn();

    const { container } = render(
      <FolderContainer
        id="secondary-with-badge"
        name="Secondary Folder with Remove"
        type="secondary"
        onRemove={onRemove}
      />,
    );

    expect(container.querySelector('.MuiBadge-root')).toBeInTheDocument();
  });

  test('render count info', () => {
    const { queryByText } = render(<FolderContainer id="count-folder" name="Folder with Count" childCount={4} />);

    expect(queryByText('4')).toBeInTheDocument();
  });
});
