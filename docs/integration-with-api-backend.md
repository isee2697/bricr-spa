### Mocks

If you are working on a new functionality and the backend is not ready yet, you can create a mock which will simulate
an endpoint and return given response instead of the real one. 

All mocks should be added under `src/api/mocks` directory, and used in the 'src/api/mocks/mock-server' mock server, made with [mirage.js](https://github.com/miragejs/miragejs). The mock server is enabled when NODE_ENV is not `production`, or when REACT_APP_CI=1.
