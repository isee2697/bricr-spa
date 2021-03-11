import React from 'react';

import { render } from 'tests';
import { palette } from 'theme/palette';

import { Button } from './Button';

describe('Button', () => {
  test('with color primary, variant contained', () => {
    const { container } = render(
      <Button color="primary" variant="contained">
        Primary
      </Button>,
    );

    const button = container.querySelector('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`background: ${palette.gradientPrimary.main}`);
  });

  test('with color primary, variant outlined', () => {
    const { container } = render(
      <Button color="primary" variant="outlined">
        Primary
      </Button>,
    );

    const button = container.querySelector('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`color: ${palette.blue.dark}`);
  });
});
