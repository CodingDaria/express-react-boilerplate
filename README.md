# express-react-boilerplate

## Quick start

1. Clone this repo using:
  ```shell
  $ git clone git@github.com:CodingDaria/express-react-boilerplate.git
  ```

2. To install dependencies run:

  ```shell
  $ yarn install
  ```

  *We recommend using `yarn` for installing packages, but you can use `npm` instead*:

  ```shell
  $ npm install
  ```
3. Run project in Dev mode

  ```shell
  $ yarn run buildDev
  $ yarn run start
  ```
  Starts the development server running on `http://localhost:8080` using the webpack.dev.config.js with Hot Module Replacement (HMR) (Changes in the application code will be hot-reloaded)

## Project Structure

#### `dist`
This directory contains compiled project files

#### `webpack.dev.config.js` `and webpack.prod.config.js`
Project environment configs. Webpack uses proper config depending on defined application environment.
By default `webpack.dev.config.js` is used.


## Command Line Commands

#### Building

```Shell
yarn buildProd
```

Prepares your app for deployment to production environment (using the webpack.prod.config.js) (does not run tests). Optimizes and minifies all files, piping them to the `dist` folder.


#### Testing

```Shell
yarn run test
```

Tests your application modern JavaScript Testing Framework - Jest with the unit tests.


```Shell
yarn run coverage
```

Generates test coverage.

