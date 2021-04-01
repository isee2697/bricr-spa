AddCustomPropertyModal

```jsx harmony
import { useState } from 'react';
import { Button } from 'ui/atoms';
import { AddCustomPropertyModal } from './AddCustomPropertyModal';

const [isOpened, setOpened] = React.useState(false);

<>
  <Button color="primary" variant="outlined" onClick={() => setOpened(true)}>
    Open modal
  </Button>
  <AddCustomPropertyModal
    onClose={() => setOpened(false)}
    isOpened={isOpened}
    labelId="styleguide.custom_property.label"
    placeholderId="styleguide.custom_property.placeholder"
    title="styleguide.custom_property.title"
    addText="styleguide.custom_property.add_text"
    onSubmit={() => {}}
  />
</>
```