const Html = ({ body }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" http-equiv="Content-Security-Policy" content="img-src 'self' data:">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
      <link rel="stylesheet" href="/css/style.css" type="text/css">
      <title>Boilerplate</title>
    </head>
    <body>
      <div id="root">${body}</div>
      <script type="text/javascript" src="/js/main.bundle.js"></script>
    </body>
  </html>
`
}

export default Html
