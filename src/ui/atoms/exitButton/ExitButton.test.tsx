import React from 'react';

import { render } from 'tests';

import { ExitButton } from './ExitButton';

describe('ExitButton', () => {
  it('render correctly', () => {
    const { getByLabelText } = render(<ExitButton />);

    expect(getByLabelText('back')).toBeTruthy();
  });
});
