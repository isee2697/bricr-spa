import React from 'react';

import { render } from 'tests';
import { palette } from 'theme/palette';

import { CircularStatus } from './CircularStatus';

describe('CircularStatus', () => {
  test('renders correctly', () => {
    const { getAllByRole } = render(<CircularStatus role="circular-status" value={20} />);

    expect(getAllByRole('circular-status').length).toBeGreaterThan(1);
  });

  test('render green color for more than 50', () => {
    const { getByText } = render(<CircularStatus value={50} />);

    const typographyElement = getByText('50%');

    expect(typographyElement).toHaveStyle(`color: ${palette.green.main}`);
  });

  test('render green color for more than 30', () => {
    const { getByText } = render(<CircularStatus value={30} />);

    const typographyElement = getByText('30%');

    expect(typographyElement).toHaveStyle(`color: ${palette.orange.main}`);
  });

  test('render green color for less than 30', () => {
    const { getByText } = render(<CircularStatus value={20} />);

    const typographyElement = getByText('20%');

    expect(typographyElement).toHaveStyle(`color: ${palette.red.main}`);
  });
});
