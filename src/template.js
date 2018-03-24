export default (reactDom) =>
  (`<!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />

      <title>Contractex</title>

      <link href="http://localhost:3000/public/css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
      <link href="http://localhost:3000/public/css/stack-interface.css" rel="stylesheet" type="text/css" media="all" />
      <link href="http://localhost:3000/public/css/socicon.css" rel="stylesheet" type="text/css" media="all" />
      <link href="http://localhost:3000/public/css/lightbox.min.css" rel="stylesheet" type="text/css" media="all" />
      <link href="http://localhost:3000/public/css/flickity.css" rel="stylesheet" type="text/css" media="all" />
      <link href="http://localhost:3000/public/css/iconsmind.css" rel="stylesheet" type="text/css" media="all" />
      <link href="http://localhost:3000/public/css/jquery.steps.css" rel="stylesheet" type="text/css" media="all" />
      <link href="http://localhost:3000/public/css/theme.css" rel="stylesheet" type="text/css" media="all" />
      <link href="http://localhost:3000/public/css/custom.css" rel="stylesheet" type="text/css" media="all" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,400i,500,600,700%7CMerriweather:300,300i" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </head>

    <body>
      <div id="app">${reactDom}</div>
      <script type="text/javascript" src="http://localhost:3000/bundle.js"></script>
    </body>
  </html>`);
