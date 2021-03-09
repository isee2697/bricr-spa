import React from 'react';

import { render } from 'tests';

import { LinkedPropertyItem } from './LinkedPropertyItem';

describe('LinkedPropertyItem', () => {
  test('render correct title', () => {
    const onEditClick = jest.fn();

    const { getByText, container } = render(
      <LinkedPropertyItem
        title="Parking Lot 12"
        image="https://source.unsplash.com/featured/?building"
        address="1011 Amsterdam Isenburgstraat 36, Breda"
        project="Projecte Name Linked Object Type"
        price="€ 25000,00 k."
        owner="Christian van Gils"
        accManager="Hendriks Makelaardij"
        status="Wojciech Dobry"
        plotNumber="Plot number"
        pimAttention="Pim attention"
        onEditClick={onEditClick}
      />,
    );

    const cardElement = container.querySelector('.MuiPaper-root');
    const imageElement = cardElement?.children[0].children[0].children[0];

    expect(imageElement).toBeTruthy();
    expect(imageElement).toHaveStyle(`background-image: url(${'https://source.unsplash.com/featured/?building'})`);
    expect(getByText('Parking Lot 12')).toBeInTheDocument();
    expect(getByText('1011 Amsterdam Isenburgstraat 36, Breda')).toBeInTheDocument();
    expect(getByText('Projecte Name Linked Object Type')).toBeInTheDocument();
    expect(getByText('€ 25000,00 k.')).toBeInTheDocument();
    expect(getByText('Christian van Gils')).toBeInTheDocument();
    expect(getByText('Hendriks Makelaardij')).toBeInTheDocument();
    expect(getByText('Wojciech Dobry')).toBeInTheDocument();
    expect(getByText('Plot number')).toBeInTheDocument();
    expect(getByText('Pim attention')).toBeInTheDocument();
  });
});
