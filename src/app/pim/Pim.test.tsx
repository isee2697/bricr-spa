import React from 'react';

import { render, fireEvent } from 'tests';

import { Pim } from './Pim';

describe('Pim', () => {
  test('renders correctly', () => {
    const onStatusChange = jest.fn();
    const onTypeChange = jest.fn();

    const { getByText } = render(
      <Pim status="archived" type="sale" onTypeChange={onTypeChange} onStatusChange={onStatusChange} />,
    );

    fireEvent.click(getByText('pim.type.rent'));
    expect(onTypeChange).toHaveBeenCalledWith('rent');

    fireEvent.click(getByText('pim.status.active'));
    expect(onStatusChange).toHaveBeenCalledWith('active');
  });
});
