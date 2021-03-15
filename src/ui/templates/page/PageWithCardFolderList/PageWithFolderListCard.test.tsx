import React from 'react';

import { render } from '../../../../tests';

import { PageWithFolderListCard } from './PageWithFolderListCard';

describe('CardWithFolder', () => {
  test('CardWithFolfder is in document', () => {
    const onSideBarOpen = jest.fn();
    const { getByTestId } = render(
      <PageWithFolderListCard path={'/path'} onSidebarOpen={onSideBarOpen} isSidebarVisible={true} title={'test'} />,
    );

    const element = getByTestId('card-with-folder');
    expect(element).toBeInTheDocument();
  });
});
