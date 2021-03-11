Example of TableList

```jsx harmony
import { TableHead, TableCell, TableRow } from 'ui/atoms';
import { TableList } from './TableList';

const items = [
  {
    id: '0001',
    name: 'Item 1',
  },
];

<>
  <TableList
    items={[]}
    itemIndex={'id'}
    header={
      <TableHead>
        <TableCell padding="checkbox" />
        <TableCell>Name</TableCell>
      </TableHead>
    }
    renderItem={(item, checked, checkbox) => (
      <TableRow>
        <TableCell padding="checkbox">{checkbox}</TableCell>
        <TableCell>{item['name']}</TableCell>
      </TableRow>
    )}
    checkedKeys={['name']}
    emptyTitle={'Empty title'}
    emptyDescription={'Empty Description'}
  />
  <TableList
    items={items}
    itemIndex={'id'}
    header={
      <TableHead>
        <TableCell padding="checkbox" />
        <TableCell>Name</TableCell>
      </TableHead>
    }
    renderItem={(item, checked, checkbox) => (
      <TableRow>
        <TableCell padding="checkbox">{checkbox}</TableCell>
        <TableCell>{item['name']}</TableCell>
      </TableRow>
    )}
    emptyTitle={'Empty title'}
    emptyDescription={'Empty Description'}
  />
</>
```