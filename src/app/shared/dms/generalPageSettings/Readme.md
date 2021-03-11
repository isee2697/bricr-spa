Example of GeneralPageSettings

```jsx harmony
import { GeneralPageSettings } from './GeneralPageSettings';

const types = ['rent', 'sale'];

const onSave = async () => {
  return undefined;
};

<GeneralPageSettings types={types} title={'Security'} onSave={onSave} />
```

```jsx harmony
import { GeneralPageSettings } from './GeneralPageSettings';

const types = ['rent', 'sale'];

const onSave = async () => {
  return undefined;
};

<GeneralPageSettings
  types={types}
  title={'Security'}
  onSave={onSave}
  updatedBy={{
    id: '0001',
    firstName: 'John',
    lastName: 'Doe',
  }}
  dateUpdated={new Date().toISOString()}
/>
```