Example of ListTableItem

```jsx harmony
import { ListTableItem } from './ListTableItem';

const data = {
  id: '0001',
  name: 'Christian van Gils',
};

const headerCells = [
  {
    field: 'id', label: 'id', sortable: true 
  },
  {
    field: 'name',
    label: 'name',
    sortable: true,
  },
];

<>
  <ListTableItem item={data} headerCells={headerCells} renderCell={(fieldName, item) => <>{item[fieldName]}</>} isHeader />
  <ListTableItem item={data} headerCells={headerCells} renderCell={(fieldName, item) => <>{item[fieldName]}</>} />
</>
```