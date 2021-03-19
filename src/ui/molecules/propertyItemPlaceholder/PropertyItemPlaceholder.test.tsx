import React from 'react';

import { render } from 'tests';

import { PropertyItemPlaceholder } from './PropertyItemPlaceholder';

describe('PropertyItemPlaceholder', () => {
  test('renders', () => {
    const { container } = render(<PropertyItemPlaceholder />);

    expect(container).toBeInTheDocument();
    expect(container.querySelectorAll('.MuiSkeleton-root').length).toEqual(13);
  });
});
