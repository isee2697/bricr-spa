import React from 'react';

import { render } from 'tests';

import { LinearProgress } from './LinearProgress';

describe('LinearProgress', () => {
  it('render correctly', () => {
    const { getByRole } = render(<LinearProgress value={90} />);

    const element = getByRole('progressbar');

    expect(element).toHaveAttribute('aria-valuenow', '0');
  });

  it('render correctly', () => {
    const { getByRole } = render(<LinearProgress value={90} max={100} />);

    const element = getByRole('progressbar');

    expect(element).toHaveAttribute('aria-valuenow', '90');
  });

  it('render correctly', () => {
    const { getByRole } = render(<LinearProgress value={120} max={100} />);

    const element = getByRole('progressbar');

    expect(element).toHaveAttribute('aria-valuenow', '83');
  });
});
