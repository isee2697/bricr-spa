### List Item Card:

```jsx harmony
import { CardWithList } from './CardWithList';
import { Box } from 'ui/atoms';
import { GenericField } from 'form/fields';

const items = [{
    id: 'id-1',
    name: 'My item name',
    dateCreated: '2020-04-28T07:30:18.162',
},
{
    id: 'id-2',
    name: 'My second item name',
    dateCreated: '2020-05-31T07:30:18.162',
}];

<>
    <CardWithList
        emoji="🤔"
        emptyStateTextFirst="My Empty state title"
        emptyStateTextSecond="My empty state subline"
        title="MYTITLE"
        items={[]}
        renderItem={(item, isEditing) => <>My item: {item.name}</>}
        onAdd={() => {}}
        onSave={() => Promise.resolve(undefined)}
    />
    <Box mb={3} />
    <CardWithList
        emoji="🤔"
        emptyStateTextFirst="My Empty state title"
        emptyStateTextSecond="My empty state subline"
        title="MYTITLE"
        items={items}
        onSave={() => Promise.resolve(undefined)}
        onAdd={() => {}}
        renderItem={(item, isEditing) => <>
            My item: {item.name}
            <GenericField disabled={!isEditing} label="my-test-field" placeholder="dont dare to touch me" name="tryout" />
        </>}
    />
</>
```