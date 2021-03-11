Example of ListOptionsMenu

```jsx harmony
import { ListOptionsMenu } from './ListOptionsMenu';

<>
  <ListOptionsMenu
    id="test-list-options-menu"
  />
  <ListOptionsMenu
    id="test-list-options-menu-with-edit-delete"
    onEditClick={() => {}}
    onDeleteClick={() => {}}
  />
  <ListOptionsMenu
    id="test-list-options-menu-without-edit"
    hideEditButton
    onDeleteClick={() => {}}
  />
  <ListOptionsMenu
    id="test-list-options-menu-without-delete"
    onEditClick={() => {}}
    hideDeleteButton
  />
</>
```