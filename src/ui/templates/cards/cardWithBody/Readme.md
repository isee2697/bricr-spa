### List Item Card:

```jsx harmony
import { CardWithBody } from './CardWithBody';
import { Box, IconButton } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';

<>
  <CardWithBody
    titleId="example.card.title"
    titleActions={
      <IconButton size="small"><AddIcon /></IconButton>
    }
  >
    <Box>Title</Box>
  </CardWithBody>
</>
```
