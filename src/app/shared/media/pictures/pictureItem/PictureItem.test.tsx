import React from 'react';

import { fireEvent, render } from 'tests';
import { FilePermission } from 'api/types';

import { PictureItem } from './PictureItem';

const picture = {
  id: '1',
  name: 'Some Picture Name',
  description: 'This picture shows lamp and sofa inside living room',
  type: 'Inside',
  image: {
    id: '1',
    key: '1',
    fileName: 'Kitchen_front.jpg',
    status: 0,
    fileType: '1',
    permission: FilePermission.Public,
    url: '',
  },
};

describe('PictureItem', () => {
  test('renders all elements', () => {
    const { getByText } = render(
      <PictureItem checkbox={<></>} picture={picture} onEdit={() => {}} editing={false} isSelected={false} />,
    );

    const title = getByText('Some Picture Name');
    const description = getByText('This picture shows lamp and sofa inside living room');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test('call on onEdit if editing', () => {
    const onEdit = jest.fn();
    const { getByTestId } = render(
      <PictureItem checkbox={<></>} picture={picture} onEdit={onEdit} editing={true} isSelected={false} />,
    );

    const editButton = getByTestId('edit-picture-button');
    fireEvent.click(editButton);

    expect(onEdit).toBeCalled();
  });

  test('does not have edit button if not editing', () => {
    const { queryByTestId } = render(
      <PictureItem checkbox={<></>} picture={picture} onEdit={() => {}} editing={false} isSelected={false} />,
    );

    const editButton = queryByTestId('edit-picture-button');

    expect(editButton).toBeFalsy();
  });
});
