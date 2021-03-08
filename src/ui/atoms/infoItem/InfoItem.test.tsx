import React from 'react';

import { render } from 'tests';
import { palette } from 'theme/palette';

import { InfoItem } from './InfoItem';

describe('InfoItem', () => {
  it('renders correctly without amount, without color', () => {
    const { getByText } = render(<InfoItem labelId={'test-info-item'} />);

    const element = getByText('test-info-item');
    expect(element).toBeTruthy();

    const amountElement = element.parentElement?.children[0];
    expect(amountElement).toBeTruthy();
    expect(amountElement?.innerHTML).toEqual('0');
  });

  it('with amount', () => {
    const { getByText } = render(<InfoItem labelId={'test-info-item'} amount={3} />);

    const element = getByText('test-info-item');

    const amountElement = element.parentElement?.children[0];
    expect(amountElement).toBeTruthy();
    expect(amountElement?.innerHTML).toEqual('3');
  });

  it('with green color', () => {
    const { getByText } = render(<InfoItem labelId={'test-info-item'} amount={3} color="green" />);

    const element = getByText('test-info-item');

    const amountElement = element.parentElement?.children[0];
    expect(amountElement).toBeTruthy();
    expect(amountElement?.innerHTML).toEqual('3');
    expect(amountElement).toHaveStyle(`color: ${palette.green.main}`);
  });

  it('with orange color', () => {
    const { getByText } = render(<InfoItem labelId={'test-info-item'} amount={3} color="orange" />);

    const element = getByText('test-info-item');

    const amountElement = element.parentElement?.children[0];
    expect(amountElement).toBeTruthy();
    expect(amountElement?.innerHTML).toEqual('3');
    expect(amountElement).toHaveStyle(`color: ${palette.orange.main}`);
  });

  it('with red color', () => {
    const { getByText } = render(<InfoItem labelId={'test-info-item'} amount={3} color="red" />);

    const element = getByText('test-info-item');

    const amountElement = element.parentElement?.children[0];
    expect(amountElement).toBeTruthy();
    expect(amountElement?.innerHTML).toEqual('3');
    expect(amountElement).toHaveStyle(`color: ${palette.red.main}`);
  });
});
