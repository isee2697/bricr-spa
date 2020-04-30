AgendaItem component:

```jsx harmony
import { AgendaItem, Box, Grid } from "ui/atoms";

<>
  <AgendaItem startDate="2020-04-28T07:30:18.162Z" endDate="2020-04-28T08:00:18.162Z" title={"My Agenda item title"} />
  <AgendaItem isAllDay={true} startDate="2020-04-28T07:30:18.162Z" endDate="2020-04-28T08:00:18.162Z" title={"My meeting title"} />
</>
```