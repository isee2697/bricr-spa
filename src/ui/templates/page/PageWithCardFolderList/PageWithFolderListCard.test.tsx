import React from 'react';

import { render } from 'tests';

import { PageWithFolderListCard } from './PageWithFolderListCard';

describe('CardWithFolder', () => {
  test('CardWithFolfder is in document', () => {
    const onSideBarOpen = jest.fn();
    const { getAllByTestId } = render(
      <PageWithFolderListCard path={'/path'} onSidebarOpen={onSideBarOpen} isSidebarVisible={true} title={'test'} />,
    );

    const elements = getAllByTestId('card-with-folder');
    expect(elements.length).toBeGreaterThanOrEqual(1);
  });
});
