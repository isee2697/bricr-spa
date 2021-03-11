import React from 'react';

import { render, fireEvent } from 'tests';

import { Order } from './Order';

const orderData = {
  labels: ['Verkoop', 'Getekend'],
  price: 375500,
  packages: 3,
  image: 'http://placeimg.com/80/80/arch',
  id: 'test1',
};

describe('Order', () => {
  test('render correctly', () => {
    const onClick = jest.fn();

    const { getByText, container } = render(
      <Order
        labels={orderData.labels}
        price={orderData.price}
        packages={orderData.packages}
        image={orderData.image}
        id={orderData.id}
        onClick={onClick}
      >
        Test content
      </Order>,
    );

    expect(getByText('Test content')).toBeInTheDocument();
    expect(container.querySelectorAll('.MuiChip-labelSmall').length).toEqual(2);
    expect(container.querySelector('.MuiAvatar-img')).toHaveAttribute('src', orderData.image);

    fireEvent.click(getByText('Test content'));

    expect(onClick).toBeCalled();
  });
});
