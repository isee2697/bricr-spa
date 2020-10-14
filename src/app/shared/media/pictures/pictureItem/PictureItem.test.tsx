import React from 'react';
import { act } from 'react-test-renderer';

import { fireEvent, render } from 'tests';
import { FilePermission } from 'api/types';
import { EntityTypeProvider, EntityType } from 'app/shared/entityType';

import { PictureItem } from './PictureItem';

if (!global.document.createRange) {
  global.document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    commonAncestorContainer: {
      nodeName: 'BODY',
      ownerDocument: document,
    },
  });
}

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
      <EntityTypeProvider entityType={EntityType.Project}>
        <PictureItem checkbox={<></>} picture={picture} onEdit={() => {}} editing={false} isSelected={false} />
      </EntityTypeProvider>,
    );

    const title = getByText('Some Picture Name');
    const description = getByText('This picture shows lamp and sofa inside living room');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test('call on onEdit if editing', () => {
    const onEdit = jest.fn();
    const { getByTestId } = render(
      <EntityTypeProvider entityType={EntityType.Project}>
        <PictureItem
          checkbox={<></>}
          picture={picture}
          isMainPicture={false}
          onEdit={onEdit}
          editing={true}
          isSelected={false}
        />
      </EntityTypeProvider>,
    );

    act(() => {
      const optionsButton = getByTestId('open-options-menu');
      fireEvent.click(optionsButton);
    });

    const editButton = getByTestId('edit-option-button');
    fireEvent.click(editButton);

    expect(onEdit).toBeCalled();
  });

  test('does not have edit button if not editing', () => {
    const { queryByTestId } = render(
      <EntityTypeProvider entityType={EntityType.Project}>
        <PictureItem checkbox={<></>} picture={picture} onEdit={() => {}} editing={false} isSelected={false} />
      </EntityTypeProvider>,
    );

    const editButton = queryByTestId('edit-picture-button');

    expect(editButton).toBeFalsy();
  });
});
