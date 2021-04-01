import React from 'react';

import { render } from '../../../../tests';

import { CardWithFolder } from './CardWithFolder';

describe('CardWithFolder', () => {
  test('CardWithFolfder is in document', () => {
    const setSelectedFolder = jest.fn();
    const { getByTestId } = render(
      <CardWithFolder isLoading={false} isError={false} setSelectedFolder={setSelectedFolder} path={'/path'} />,
    );

    const element = getByTestId('card-with-folder');
    expect(element).toBeInTheDocument();
  });
});
