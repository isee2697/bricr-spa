Example of VerticalTimeline component

```jsx harmony
import { useTheme } from '@material-ui/core/styles';

import { Typography } from "ui/atoms";
import { VerticalTimeline } from 'ui/molecules';
import { VerticalTimelineItem } from 'ui/molecules/verticalTimeline/VerticalTimeline.types';

const theme = useTheme();

const timeItems = [
  {
    title: 'Sign a deed of purchase',
    icon: <CheckIcon />,
    content: 'This was created by company',
    createdBy: 'John Doe',
  },
  {
    title: 'Sign a deed of purchase',
    icon: <CheckIcon />,
    content: 'This was created by company',
    createdBy: 'John Doe',
  },
];

const renderTimelineItems = (items) => {
  return items.map(item => ({
    title: item.title,
    icon: item.icon,
    children: <Typography variant="h5">{item.content}</Typography>,
  }));
};

<div style={{backgroundColor: theme.palette.gray.light, padding: 16, display: 'flex', justifyContent: 'space-between'}}>
  <VerticalTimeline items={renderTimelineItems(timelineItems)} />
</div>
```
