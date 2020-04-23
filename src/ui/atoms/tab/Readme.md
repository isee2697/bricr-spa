Example of Tab component
```jsx harmony
import { Tab } from 'ui/atoms';

<>
  <Tab label="Default tab"/>
  <Tab label="Disabled tab" disabled/>
</>
```


Tab component with icon
```jsx harmony
import { Tab } from 'ui/atoms';
import { HomeIcon } from 'ui/atoms/icons/home/HomeIcon';
import { BuildingIcon } from 'ui/atoms/icons/building/BuildingIcon';

<>
  <Tab label="Default tab" icon={<HomeIcon color="inherit"/>}/>
  <Tab icon={<BuildingIcon color="inherit"/>} disabled/>
</>
```