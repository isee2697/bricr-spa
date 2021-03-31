import React from 'react';

import { fireEvent, render } from 'tests';

import { AvatarRowItem } from './AvatarRowItem';

describe('AvatarRowItem', () => {
  test('with icon', () => {
    const { container, getByText } = render(
      <AvatarRowItem name="Christian van Gils" onDelete={() => {}} src="https://source.unsplash.com/featured/?map" />,
    );

    expect(getByText('Christian van Gils')).toBeInTheDocument();
    expect(container.querySelector('.MuiAvatar-img')).toHaveAttribute(
      'src',
      'https://source.unsplash.com/featured/?map',
    );
  });

  test('without icon', () => {
    const { container } = render(<AvatarRowItem name="Christian van Gils" onDelete={() => {}} />);

    expect(container.querySelector('.MuiAvatar-root .MuiBox-root')).toHaveTextContent('C');
  });

  test('on click delete', () => {
    const onDelete = jest.fn();

    const { container } = render(<AvatarRowItem name="Christian van Gils" onDelete={onDelete} />);

    const deleteButton = container.querySelector('button');

    expect(deleteButton).toBeInTheDocument();

    fireEvent.click(deleteButton!);

    expect(onDelete).toBeCalled();
  });

  test('on click', () => {
    const onClick = jest.fn();

    const { getByText } = render(<AvatarRowItem name="Christian van Gils" onClick={onClick} onDelete={() => {}} />);

    const nameElement = getByText('Christian van Gils');

    fireEvent.click(nameElement);

    expect(onClick).toBeCalled();
  });
});
