import path from 'path';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import favicon from 'serve-favicon';

import Html from '../src/html';

require('dotenv').config();

const PORT = process.env.PORT || 8080;

const server = express();

const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../dist/')),
  express.json(),
  express.urlencoded({ extended: true }),
  cookieParser(),
  favicon(path.join(__dirname, 'public', 'favicon.ico')),
];
middleware.forEach((it) => server.use(it));

server.get('/api/v1/test', (req, res) => {
  console.log('success');
  res.send('Hello World!');
});

server.use('/api/', (req, res) => {
  res.status(404);
  res.end();
});

server.get('/*', (req, res) => {
  const initialState = {
    location: req.url,
  };
  return res.send(
    Html({
      body: '',
      initialState,
    }),
  );
});

server.listen(PORT, () => {
  console.log(`Serving at http://localhost:${PORT}`);
});
