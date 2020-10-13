import React from 'react';
import { render, fireEvent } from 'tests';

import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Dropdown items={[]} placeholder="Select something" onChange={() => {}} />);

    const element = getByText('Select something');

    expect(element).toBeInTheDocument();
  });

  test('reacts for selection properly', () => {
    const changeFn = jest.fn();

    const { getByText } = render(
      <Dropdown
        items={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
        ]}
        placeholder="Select something"
        onChange={changeFn}
      />,
    );

    fireEvent.click(getByText('Select something'));

    expect(getByText('Option 1')).toBeVisible();
    expect(getByText('Option 2')).toBeVisible();

    fireEvent.click(getByText('Option 1'));

    expect(getByText('Option 1')).not.toBeVisible();
    expect(getByText('Option 2')).not.toBeVisible();
    expect(changeFn).toHaveBeenCalledWith('option1');
  });
});
