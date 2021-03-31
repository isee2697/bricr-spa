import React from 'react';

import { render } from 'tests';
import { palette } from 'theme/palette';
import { ListOptionsMenu } from '../listOptionsMenu/ListOptionsMenu';

import { PropertyItem } from './PropertyItem';

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

const propertyStageItems = [
  { title: 'Acquisition', date: '10-10-2019' },
  { title: 'Order', date: '28-10-2019' },
  { title: 'List up', date: '29-10-2019' },
  { title: 'Reactions' },
  { title: 'Bidding' },
  { title: 'Sign' },
];

const propertyData = {
  title: 'Isenburgstraat 36, Breda',
  image: 'http://placeimg.com/176/112/arch',
  date: yesterday.toISOString(),
  labels: ['90 m²', '3 kamers', 'Apartament'],
  id: 'test1',
  discountPrice: 385000,
  salePrice: 375500,
  rentPrice: 1399,
};

describe('PropertyItem', () => {
  test('render correctly', () => {
    const { getByText, container, queryByTestId } = render(
      <PropertyItem
        title={propertyData.title}
        image={propertyData.image}
        date={propertyData.date}
        labels={propertyData.labels}
        discountPrice={propertyData.discountPrice}
        salePrice={propertyData.salePrice}
        rentPrice={propertyData.rentPrice}
        alert="No more house view scheduling"
        completeness={0.6}
        status="Wait for owner"
        categories={['Sale', 'Order']}
        stageItems={propertyStageItems}
        stageIndex={2}
        formerOwners="G. De Gracht | W. Van Hoof"
        buyers="H.Hendriks | L. Lemmers-van Liempd"
      />,
    );

    expect(getByText(propertyData.title)).toBeInTheDocument();
    expect(container.querySelectorAll('.filled').length).toEqual(4);
    propertyData.labels.forEach(label => {
      expect(getByText(label)).toBeInTheDocument();
    });
    expect(getByText('No more house view scheduling')).toBeInTheDocument();
    expect(queryByTestId('open-options-menu')).toBeNull();
  });

  test('renders action menu', () => {
    const { queryByTestId } = render(
      <PropertyItem
        title={propertyData.title}
        image={propertyData.image}
        date={propertyData.date}
        labels={propertyData.labels}
        discountPrice={propertyData.discountPrice}
        salePrice={propertyData.salePrice}
        rentPrice={propertyData.rentPrice}
        alert="No more house view scheduling"
        completeness={0.6}
        status="Wait for owner"
        categories={['Sale', 'Order']}
        stageItems={propertyStageItems}
        stageIndex={2}
        actionsMenu={<ListOptionsMenu id={`test-menu`} />}
      />,
    );

    expect(queryByTestId('open-options-menu')).toBeInTheDocument();
  });
});
