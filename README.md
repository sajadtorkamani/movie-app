# Movie App

### [Live demo](https://movie-app.sajadtorkamani.com/)

This is a single page app built with [Vue.js](https://vuejs.org/) and the [Vue CLI](https://cli.vuejs.org/).

## Local setup

##### 1. Install dependencies

```bash
yarn install
```

##### 2. Create `.env` file

Copy the provided `.env.example` to a new `.env` file and set any env variables as needed.

```bash
cp .env.example .env
```

##### 3. Start development server

```bash
yarn serve
```

## Tests

There are number of [Cypress](https://www.cypress.io/) integration tests in the `tests/e2e/specs` directory.

You can run these tests by running `yarn test:e2e` which will open the Cypress test runner.

## Deployment

The app is deployed as a static website on [Netlify](https://www.netlify.com/).
