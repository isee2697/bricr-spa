### Queries and Mutations

Place queries and mutations inside `/src/api` directory in file according to business domain, ie. Login mutation should be places inside `/src/api/mutations/auth.ts` and exported as a const `export const LOGIN`

### API types and hooks

All API types and hooks are generated with command `npm run generate:api-types`. Then you shouldn't use `useMutation` and `useQuery` directly from `@apollo/hooks`. For example when you create `LOGIN` mutation and run generate types command, you have to use generated `useLoginMutation` hook

```typescript
import { useLoginMutation } from 'api/types';

const [login] = useLoginMutation();
```

### Mocks

If you are working on a new functionality and the backend is not ready yet, you can create a mock which will simulate
an endpoint and return given response instead of the real one. 

All mocks should be added under `src/api/mocks` directory, and used in the 'src/api/mockServer.ts' mock server, made with [mirage.js](https://github.com/miragejs/miragejs). The mock server is enabled when NODE_ENV is not `production`, or when REACT_APP_CI=1.
