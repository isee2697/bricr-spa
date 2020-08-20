## Requirements
- Node v13.13

## Start project
- `npm install` to install all dependecies
- copy `.env.dist` to `.env` and replace all endpoints, keep `/mock` endpoints to use mocked backend or uncomment urls to use real backend
- run application using `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view app in the browser

## Quick info about project
- was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- uses NPM Package Manager
- uses MaterialUI 
- uses `Apollo GraphQL` to communicate with backend API
- uses functional React components
- uses `styleguidist` to browse components
- uses `plop.js` to generate basic structure for React components and hooks
- uses eslint rules with prettier configured inside
- uses commitlint ([docs](./docs/commitlint.md))
- uses `@graphql-codegen` for generating api
- has [styleguide](./docs/styleguide.md) 
- uses React Context API along with React hooks to manage global states

## CI

We use bitbucket pipelines as CI. Configuration is in `bitbucket-pipelines.yml`. There are few pipelines: 
- `default`: run always, it checks lints, unit tests and build projects
- `pull-requests`: run on pull requests, run e2e tests
- `custom:staging`: deploy branch to staging environment
- `custom:develop`: deploy branch to develop environment

## Project Structure
- api - all graphql definitions
    * graphql - `*.gql` files from backend repository. Be careful with `file.gql` because it also has definitions for REST upload
    * mocks -  used in e2e tests and mocked environment
    * mutations - `*.ts` files with mutations definitions 
    * queries - `*.ts` files with queries definitions 
- app - main directory with business logic components, each directory is created for single business functionality
    * shared - special directory fot components which are used in different parts of system and have if-else conditions e.g. characteristic page is same for NCP and ObjectType, so we reuse whole page components and add different containers, Media functionality with containers and use context and if statements to determine correct api request
- assets - all static files like images
- context - all context use in app
- form - directory with fields, validators and mutators for react-final-form
- hooks - custom hooks created in app
- i18n - files with translations
- providers - contains `AppProviders` which contain all providers for App
- routing - top-level routes, configuration and helpers functions
- styleguidistWrapper - wrapper for styleguidist to use `AppProvider` 
- tests - custom wrapper used in unit tests
- theme - MaterialUI theme overrides
- types - custom types
- ui - directory with shared components in atomic desgin system and additional directory for bulk action and filters reused components

## Generating translations

We are using [Babelsheet](https://thesoftwarehouse.github.io/babelsheet-js/) to generate translations from GoogleSheet. To start using this you need to copy `.env.babelsheet.dist` to `.env.babelsheet` and fill with credentials. If you don't have credentials you can use this [instruction](https://thesoftwarehouse.github.io/babelsheet-js/configuration/). If you have all credentials use `npm run translations`.

## Plops

We use [PlopJS](https://plopjs.com/) for creating components and hooks. Configuration is inside `./plopfile.js` file. Templates for files are inside `./plop-templates` directory. You can change both files according to your needs. To run plop interactive command run `npm run plop`

## Generating API
 - we use MirageJS to mock responses from api
 - don't change `src/api/types.ts` file because it is generated using `@graphql-codegen`
 - [Docs](./docs/api.md)

## E2E

For E2E testing we are using the [Cypress](https://www.cypress.io/) framework. There is also separate repository with e2e testing. 

## Available Scripts

In the project directory, you can run:

### `npm lint(:fix)`

Runs the linter (and fixes fixable issues)

### `npm plop`

Runs [Plop JS](https://plopjs.com/) used for generating custom hooks and react components. 

### `e2e:run`

Runs Cypress E2E tests in a headless mode (the browser window is not visible)

### `e2e:open`

Opens the Cypress UI, allowing to run and watch E2E tests

### `e2e:ci`

Builds the app as a CI environment, sets up an html server with `npm run serve` and runs the E2E tests in a headless mode. Useful when investigating pipeline failures.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run translations`

Fetch translations and place files into `./src/i18n/data`

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run genereate:api-types`

Generates TS types based on src/api/graphql/*, src/api/mutations/* and src/api/queries/* files. It creates all the required query and mutation hooks and writes them in src/api/types.ts file.

### `npm run styleguidist:serve`

It will open our styleguide with all ready to use components and its readme.

### `npm run styleguidist:build`

Build styleguidist to html page

### `npm run coverage`

Launches the test runner in the coverage report generation mode.<br />
See [this](https://create-react-app.dev/docs/running-tests/#coverage-reporting) section for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
