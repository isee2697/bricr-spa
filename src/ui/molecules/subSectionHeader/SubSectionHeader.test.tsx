import React from 'react';
import { render } from 'tests';

import { SubSectionHeader } from './SubSectionHeader';

describe('SubSectionHeader', () => {
  test('should be rendered', () => {
    const { getByText } = render(
      <SubSectionHeader onOptionsClick={() => {}} onToggleClick={() => {}}>
        Test part
      </SubSectionHeader>,
    );

    const element = getByText('Test part');

    expect(element).toBeInTheDocument();
  });
});
