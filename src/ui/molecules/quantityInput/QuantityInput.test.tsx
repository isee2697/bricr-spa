import React from 'react';
import { render, fireEvent } from 'tests';

import { QuantityInput } from './QuantityInput';

describe('QuantityInput', () => {
  test('renders correctly and fires onChange event with correct value', () => {
    const onChange = jest.fn();

    const { getByText, getAllByRole } = render(
      <QuantityInput label="Quantity" value={10} min={0} max={20} onChange={onChange} />,
    );

    const element = getByText('Quantity');
    expect(element).toBeInTheDocument();

    // Subtract
    fireEvent.click(getAllByRole('button')[0]);
    expect(onChange).toHaveBeenCalledWith(9);

    // Add
    fireEvent.click(getAllByRole('button')[1]);
    expect(onChange).toHaveBeenCalledWith(11);
  });

  test('disallow to change value to out of boundaries', () => {
    const onChange = jest.fn();

    const { getAllByRole } = render(<QuantityInput label="Quantity" value={0} min={0} max={0} onChange={onChange} />);

    // Subtract
    fireEvent.click(getAllByRole('button')[0]);
    expect(onChange).not.toHaveBeenCalledWith(9);

    // Add
    fireEvent.click(getAllByRole('button')[1]);
    expect(onChange).not.toHaveBeenCalledWith(11);
  });
});
