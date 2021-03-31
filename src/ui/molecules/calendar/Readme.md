Example of Calendar

```jsx harmony
import { Box } from 'ui/atoms';
import { AppLocale } from 'context/locale/AppLocale.enum';

import { Calendar } from './Calendar';
import { DateView } from './Calandar.types';

const currentDate = new Date();

<Box>
  <Calendar view={DateView.Day} currentDate={currentDate} data={[]} />
  <Calendar view={DateView.Day} currentDate={currentDate} data={[]} />
  <Calendar view={DateView.Day} currentDate={currentDate} data={[]} />
  <Calendar view={DateView.Day} currentDate={currentDate} data={[]} />
</Box>
```
