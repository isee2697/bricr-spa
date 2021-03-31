import React from 'react';

import { render } from 'tests';
import { palette } from 'theme/palette';

import { FormSubSectionHeader } from './FormSubSectionHeader';

describe('FormSubSectionHeader', () => {
  test('with normal settings', () => {
    const { getByText } = render(<FormSubSectionHeader title={'Test header'} />);

    expect(getByText('Test header')).toBeInTheDocument();
    expect(getByText('Test header').parentElement).toHaveStyle(`border-bottom-color: ${palette.gray.light}`);
  });

  test('with subtitle', () => {
    const { getByText } = render(
      <FormSubSectionHeader title={'Test header title'} subtitle={'Test header subtitle'} />,
    );

    expect(getByText('Test header title')).toBeInTheDocument();
    expect(getByText('Test header subtitle')).toBeInTheDocument();
  });

  test('without border bottom', () => {
    const { getByText } = render(<FormSubSectionHeader title={'Test header'} noBorder />);

    expect(getByText('Test header').parentElement).toHaveStyle(`border-bottom-width: 0`);
  });
});
