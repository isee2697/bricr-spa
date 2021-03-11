Example of Security

```jsx harmony
import { Security } from './Security';

const securityData = {
  documentRights: [
    {
      id: '0001',
      name: 'Match',
      permissions: {
        create: false,
        read: true,
        update: false,
        delete: true,
      },
    },
  ],
}

const onSave = async () => undefined;

<Security title={'Security'} onSave={onSave} data={securityData} />
```