Example of MultiSearch component
```jsx harmony
import { MultiSearch } from 'ui/molecules';

<MultiSearch options={[
    { title: 'Stationstraat 25, Amsterdam', type: 'Property' },
    { title: 'The Software House', type: 'Email', subline: 'Marcin Piela', date: new Date() },
    { title: 'CubicEyes', type: 'Email', subline: 'Christian van Gils', date: new Date() },
    { title: 'Amsterdam bezichtiging inpannen', type: 'Note', date: new Date() },
    { title: 'Amsterdam bezichtiging inpannen 2', type: 'Note', date: new Date() },
    { title: 'Amsterdam bezichtiging inpannen 2', type: 'Note', date: new Date() },
]}/>
```
