Example of List component

```jsx harmony
import React from 'react';

import { List } from 'ui/molecules';
import { Box, Typography } from 'ui/atoms';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';

<List
  items={[
    { title: 'First elementIsenburgstraat 36, Breda', subtitle: '2 days ago', price: 375500 },
    { title: 'Van der Meerstraat 45, Amersfoort', subtitle: '1 hour ago', price: 358000 },
    { title: 'Waterlooplein 887, Geldrop', subtitle: 'in 2 days', price: 790000 },
  ]}
  itemIndex="title"
  renderItem={(item, isSelected) => (
    <Box>
      <Typography variant="h5">{item.subtitle}</Typography>
      <Typography variant="h2">{item.title}</Typography>
      <Typography variant="h3">€ {item.price}</Typography>
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
/>;
```
