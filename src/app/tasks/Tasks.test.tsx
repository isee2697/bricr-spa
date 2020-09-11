import React from 'react';

import { render } from 'tests';

import { Tasks } from './Tasks';

describe('Tasks', () => {
  test('renders correctly', () => {
    render(<Tasks user={{ id: 'test', firstName: 'test', lastName: 'test' }} members={[]} error={undefined} />);
  });
});
