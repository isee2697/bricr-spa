import React from 'react';

import { render } from 'tests';

import { PropertyStage } from './PropertyStage';

describe('PropertyStage', () => {
  test('renders', () => {
    const items = [{ title: 'Foo', date: '29-10-2019' }, { title: 'Bar' }];
    const { getByTestId } = render(<PropertyStage items={items} activeItem={0} />);

    const element = getByTestId('property-stage');

    expect(element).toBeInTheDocument();
  });
});
