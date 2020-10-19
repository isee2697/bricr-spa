import React from 'react';
import { render } from 'tests';

import { DmsTemplates } from './DmsTemplates';

describe('DmsTemplates', () => {
  test('renders', () => {
    const { getByText } = render(
      <DmsTemplates />,
    );

    const element = getByText('DmsTemplates');

    expect(element).toBeInTheDocument();
  });
});
