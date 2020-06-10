import React from 'react';

import { fireEvent, render } from 'tests';
import { FilePermission } from 'api/types';

import { PictureItem } from './PictureItem';

const picture = {
  title: 'Some Picture Name',
  description: 'This picture shows lamp and sofa inside living room',
  type: 'Inside',
  image: {
    id: '1',
    key: '1',
    fileName: 'Kitchen_front.jpg',
    status: 0,
    fileType: '1',
    permission: FilePermission.Public,
    url:
      'https://3.allegroimg.com/s512/03174f/6c5a98b84a3ea2632c2e02949083/PODKLADKA-LAMINOWANA-A2-NA-BIURKO-KOT-KOTKI-KOTEK',
  },
};

describe('PictureItem', () => {
  test('renders all elements', () => {
    const { getByText } = render(
      <PictureItem checkbox={<></>} picture={picture} onSelect={() => {}} editing={false} />,
    );

    const title = getByText('Some Picture Name');
    const description = getByText('This picture shows lamp and sofa inside living room');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
  test('call on Select if editing', () => {
    const onSelect = jest.fn();
    const { getByTestId } = render(
      <PictureItem checkbox={<></>} picture={picture} onSelect={onSelect} editing={true} />,
    );

    const container = getByTestId('picture-item');
    fireEvent.click(container);

    expect(onSelect).toBeCalled();
  });
  test('does not call on Select if not editing', () => {
    const onSelect = jest.fn();
    const { getByTestId } = render(
      <PictureItem checkbox={<></>} picture={picture} onSelect={onSelect} editing={false} />,
    );

    const container = getByTestId('picture-item');
    fireEvent.click(container);

    expect(onSelect).not.toBeCalled();
  });
});