Example of SubSectionheader component
```jsx harmony

import { Card, CardContent, CardHeader, CardActions, Button, IconButton } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { StatCard } from 'ui/molecules';
import { StatsSection } from 'ui/organisms';
import { SubSectionHeader } from './SubSectionHeader';

<Card>
  <CardHeader title="Basic card" action={<IconButton aria-label="add" color="primary" size="small"><AddIcon color="inherit" /></IconButton>} />
  <SubSectionHeader toggled={false} onToggleClick={() => {}} onOptionsClick={() => {}} >My SubSection header</SubSectionHeader>
  <CardContent>Content</CardContent>
</Card>
```