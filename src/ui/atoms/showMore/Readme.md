Example of ShowMore
```jsx harmony
import { ShowMore } from 'ui/atoms';

const appointmentData = [
  {
    startDate: new Date(),
    endDate: new Date(),
  },
];

<>
  <ShowMore amount={2} data={[]} />
  <ShowMore amount={2} data={appointmentData} />
</>
```