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
  $ yarn run dev
  ```
  Creates the development build and starts the development server running on `http://localhost:8000` using the webpack.dev.config.js with Hot Module Replacement (HMR) (Changes in the application code will be hot-reloaded)

  ## Features

* Modern ES6
* SASS/SCSS
* TailwindCSS
* Redux
* React Router
* Socket.io
* MongoDB

Switch to branch **light** to develop without Socket.io and MongoDB.

## Project Structure

#### `server`

Back-end folder. Add your server features here.

#### `src/`

You will write your React app in this folder.

#### `src/components`

This folder contains all your React components.

#### `webpack.dev.config.js` and `webpack.prod.config.js`
Project environment configs. Webpack uses proper config depending on defined application environment.
By default `webpack.dev.config.js` is used.


## Command Line Commands

#### Developing

```Shell
yarn run server
```
Starts the development server running on `http://localhost:8080`.

```Shell
yarn run client
```
Runs the client side of the application on `http://localhost:8000`.

```Shell
yarn run lint
```
```Shell
yarn run prettier
```

Runs respectively ESLint and Prettier on project directories.


#### Building

```Shell
yarn buildDev
```

Creates the development build, piping files to the `dist` folder.


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

