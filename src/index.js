// import logMessage from "./js/logger";
// import "./css/style.css";
// // Log message to console
// logMessage("Warm welcome to Express!");

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import './css/style.css'

ReactDOM.render(
  <Root />,
  document.getElementById('react-container') // eslint-disable-line no-undef
)

// Needed for Hot Module Replacement
// eslint-disable-next-line no-undef
if (typeof module.hot !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef
}
