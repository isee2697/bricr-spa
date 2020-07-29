### Linked Item Card:

```jsx harmony
import { CardWithLinkedItem } from './CardWithLinkedItem';
import { Box } from 'ui/atoms';
import { LinkedPerson,  } from 'ui/molecules';
import { GenericField } from 'form/fields';
import { AutosaveForm } from 'ui/organisms';
<>
<CardWithLinkedItem
    onLinkButtonClick={() => {
      alert('HI');
    }}
    emoji="🤔"
    emptyStateTextFirst="My Empty state title"
    emptyStateTextSecond="My empty state subline"
    linkButtonText="Add new item"
    showEmptyState
    title="MYTITLE"
  >
   <>NO dATA</>
</CardWithLinkedItem>
<Box mb={3} />
<CardWithLinkedItem
    onLinkButtonClick={() => {
      alert('HI');
    }}
    emoji="🤔"
    emptyStateTextFirst="My Empty state title"
    emptyStateTextSecond="My empty state subline"
    linkButtonText="Add new item"
    showEmptyState
    title="MYTITLE"
    titleBadge={0}
  >
   <>NO dATA</>
</CardWithLinkedItem>
<Box mb={3} />
<CardWithLinkedItem
    onLinkButtonClick={() => {
      alert('HI');
    }}
    isEditable={false}
    emoji="🤔"
    emptyStateTextFirst="My Empty state title"
    emptyStateTextSecond="My empty state subline"
    linkButtonText="Add new item"
    title="MYTITLE"
  >
    <LinkedPerson 
      name="Christian van Gils"
      avatar="https://source.unsplash.com/featured/?person"
      office="Vesteging Weert"
      company="Hendriks Makelaardij"
      phone="06-48764044"
      email="christian@cubiceyes.com"
      onOptionsClick={() => {}}
      onChangeClick={()=>{}}
    />
</CardWithLinkedItem>
<Box mb={3} />
<CardWithLinkedItem
    onLinkButtonClick={() => {
      alert('HI');
    }}
    titleBadge={1234}
    emoji="🤔"
    emptyStateTextFirst="My Empty state title"
    emptyStateTextSecond="My empty state subline"
    linkButtonText="Add new item"
    title="MYTITLE"
    onAdd={() => {}}
    onOptionsClick={() => {}}
    onSettingsClick={() => {}}
    isInitExpanded={true}
  >
    {(editing) => (<AutosaveForm onSave={() => Promise.resolve(undefined)}>
    <GenericField name="example" label="label" placeholder="placeholder" disabled={!editing} />
    </AutosaveForm>)}
</CardWithLinkedItem>
</>
```