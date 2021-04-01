import React from 'react';

import { fireEvent, render } from 'tests';

import { LinkedPerson } from './LinkedPerson';

describe('LinkedPerson', () => {
  test('renders correctly', () => {
    const onChangeClick = jest.fn();

    const { container, getByText } = render(
      <LinkedPerson
        name="Christian van Gils"
        avatar="https://source.unsplash.com/featured/?person"
        office="Vesteging Weert"
        company="Hendriks Makelaardij"
        phone="06-48764044"
        email="christian@cubiceyes.com"
        onChangeClick={onChangeClick}
      />,
    );

    expect(getByText('Christian van Gils')).toBeInTheDocument();
    expect(getByText('Vesteging Weert')).toBeInTheDocument();
    expect(getByText('Hendriks Makelaardij')).toBeInTheDocument();
    expect(getByText('06-48764044')).toBeInTheDocument();
    expect(getByText('christian@cubiceyes.com')).toBeInTheDocument();
    expect(getByText('linked_person.change_link')).toBeInTheDocument();
    expect(container.querySelector('img')).toHaveAttribute('src', 'https://source.unsplash.com/featured/?person');

    fireEvent.click(getByText('linked_person.change_link')!);

    expect(onChangeClick).toBeCalled();
  });
});
