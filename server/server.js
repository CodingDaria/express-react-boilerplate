import path from 'path'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import favicon from 'serve-favicon'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../webpack.server.config.js'

import Html from '../src/html'

require('dotenv').config()
// webpack-dev-server --mode development --config webpack.dev.config.js
const PORT = process.env.PORT || 8080

const server = express()

const compiler = webpack(config)

const middleware = [
  cors(),
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }),
  webpackHotMiddleware(compiler),
  express.static(path.resolve(__dirname, '../dist/')),
  express.json(),
  express.urlencoded({ extended: true }),
  cookieParser(),
  favicon(path.join(__dirname, 'public', 'favicon.ico'))
]
middleware.forEach((it) => server.use(it))

server.get('/api/v1/test', (req, res) => {
  console.log('success')
  res.send('Hello World!')
})

server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
})

server.get('/*', (req, res) => {
  res.send(req.url.slice(1))
})

server.get('/*', (req, res) => {
  const initialState = {
    location: req.url
  }
  return res.send(
    Html({
      body: '',
      initialState
    })
  )
})

server.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(path.join(__dirname, '..', 'index.html'), (err, result) => {
    if (err) {
      return next(err)
    }
    res.set('content-type', 'text/html')
    res.send(result)
    res.end()
  })
})

server.listen(PORT, () => {
  console.log(`Serving at http://localhost:${PORT}`)
})
