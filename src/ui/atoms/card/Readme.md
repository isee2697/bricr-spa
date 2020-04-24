Basic Card with title and action:

```jsx harmony
import { Card, CardContent, CardHeader, CardActions, Button, IconButton } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';

  <Card>
    <CardHeader title="Basic card" action={<IconButton aria-label="add" color="primary" size="small"><AddIcon color="inherit" /></IconButton>} />
    <CardContent>Content</CardContent>
    <CardActions><Button fullWidth>View more (50)</Button></CardActions>
  </Card>

```
