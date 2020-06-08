import React from 'react';
import { fireEvent } from '@testing-library/dom';

import { render } from 'tests';

import { SimpleSearch } from './SimpleSearch';

describe('SimpleSearch', () => {
  test('should be rendered', () => {
    const { getByPlaceholderText } = render(<SimpleSearch value="" onChange={() => {}} />);

    const element = getByPlaceholderText('common.search');

    expect(element).toBeInTheDocument();
  });

  test('should change value', () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(<SimpleSearch value="" onChange={onChange} />);

    fireEvent.change(getByPlaceholderText('common.search'), { target: { value: 'test' } });

    expect(onChange).toHaveBeenCalled();
  });
});
