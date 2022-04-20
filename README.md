# Bagy Dashboard

Deverá ser implementado um dashboard em ReactJs (sem o uso de bibliotecas
de componentes, exceto pelos componentes dos gráficos) de visualização de dados.

## Overview

- The application is developed with <a href="https://reactjs.org/" target="_blank" title="React">React</a>, <a href="https://www.typescriptlang.org/" target="_blank" title="Typescript">Typescript</a> and <a href="https://styled-components.com/" target="_blank" title="Typescript">Styled Components</a>.
- End-2-end tests with <a href="https://www.cypress.io/" target="_blank" title="Cypress">Cypress</a>.
- For the chart the application is using <a href="https://recharts.org/" target="_blank" title="Recharts">Recharts</a>.
-  <a href="https://github.com/typicode/json-server" target="_blank" title="JSON Server">JSON Server</a> to mock the backend requests.

## Installation

Clone the project:

```bash
git@github.com:leojuriolli7/bagy-dashboard.git
```

Go to the project directory:

```bash
cd bagy-dashboard
```

Install the project dependencies:

```bash
npm install
```
## Usage

First, start JSON Server:

```bash
npm run json-server
```

Start the application:

```bash
npm start
```

## Tests

To run all the tests:

```bash
npx cypress run
```

To run the tests on the browser:

```bash
npx cypress open
```

You can run a single test by clicking on the test name or click "Run integration specs" to run all the tests.
