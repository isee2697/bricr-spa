Example of List component

```jsx harmony
import React from 'react';

import { List, PropertyItem } from 'ui/molecules';
import { Box, Typography, Chip } from 'ui/atoms';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import { useTheme } from '@material-ui/core/styles';

const theme = useTheme();
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

<List
  items={[
    { title: 'First elementIsenburgstraat 36, Breda', subtitle: '2 days ago', salePrice: 375500 },
    { title: 'Van der Meerstraat 45, Amersfoort', subtitle: '1 hour ago', salePrice: 358000 },
    { title: 'Waterlooplein 887, Geldrop', subtitle: 'in 2 days', salePrice: 790000 },
  ]}
  itemIndex="title"
  renderItem={(item, isSelected) => (
    <PropertyItem
      title={item.title}
      image="http://placeimg.com/176/112/arch"
      date={yesterday.toISOString()}
      labels={['90 m²', '3 kamers', 'Apartament']}
      discountPrice={item.salePrice}
      salePrice={item.salePrice}
      rentPrice={1231}
      isHighlighted={false}
      onMenuClick={() => {}}
      completeness={0.7}
      status="Wait for owner"
      categories={['Sale', 'Rent']}
      stageItems={propertyStageItems}
      stageIndex={2}
    />
  )}
  onBulk={selectedItems => alert(JSON.stringify(selectedItems))}
  sortOptions={[
    { key: 'lastEdited', name: 'Last edited' },
    { key: 'firstEdited', name: 'First edited' },
  ]}
  onSort={key => alert(key)}
  pagination={{
    count: 8,
    currentPerPage: 10,
    perPageOptions: [10, 25, 'All'],
    onPerPageChange: value => {
      alert(value);
    },
  }}
/>;
```

Loading state

```jsx harmony
import React from 'react';

import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { Box, Typography } from 'ui/atoms';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';

<List
  items={[]}
  itemIndex="title"
  renderItem={(item, isSelected) => (
    <Box>
      <Typography variant="h5">{item.subtitle}</Typography>
      <Typography variant="h2">{item.title}</Typography>
      <Typography variant="h3">€ {item.salePrice}</Typography>
    </Box>
  )}
  onBulk={selectedItems => alert(JSON.stringify(selectedItems))}
  sortOptions={[
    { key: 'lastEdited', name: 'Last edited' },
    { key: 'firstEdited', name: 'First edited' },
  ]}
  onSort={key => alert(key)}
  pagination={{
    count: 8,
    currentPerPage: 10,
    perPageOptions: [10, 25, 'All'],
    onPerPageChange: value => {
      alert(value);
    },
  }}
  loading
  loadingItem={<PropertyItemPlaceholder />}
/>;
```
