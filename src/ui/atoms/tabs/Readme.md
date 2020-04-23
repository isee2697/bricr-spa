Example of default Tabs component
```jsx harmony
import { Tabs, Tab } from 'ui/atoms';

<Tabs value={0}>
  <Tab label="Default tab"/>
  <Tab label="Disabled tab" disabled/>
  <Tab label="Default tab"/>
</Tabs>
```

Centered tabs with primary color
```jsx harmony
import { Tabs, Tab } from 'ui/atoms';

<Tabs value={0} centered  indicatorColor="primary" textColor="primary">
  <Tab label="Default tab"/>
  <Tab label="Disabled tab" disabled/>
  <Tab label="Default tab"/>
</Tabs>
```

Tabs with icons and primary color
```jsx harmony
import { Tabs, Tab } from 'ui/atoms';
import { HomeIcon } from 'ui/atoms/icons/home/HomeIcon';
import { BuildingIcon } from 'ui/atoms/icons/building/BuildingIcon';

<Tabs value={0} centered  indicatorColor="primary" textColor="primary">
  <Tab label="Default tab" icon={<HomeIcon color="inherit"/>}/>
  <Tab icon={<BuildingIcon color="inherit"/>} disabled/>
  <Tab label="Default tab"/>
</Tabs>
```

Tabs placed in a card
```jsx harmony
import { Tabs, Tab, Card, CardContent } from 'ui/atoms';

<Card>
  <Tabs value={0} indicatorColor="primary" textColor="primary">
    <Tab label="Default tab"/>
    <Tab label="Disabled tab" disabled/>
    <Tab label="Default tab"/>
  </Tabs>
  <CardContent>
    Some content
  </CardContent>
</Card>
```