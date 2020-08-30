const http = require('http');
const url = require('url');
const fs = require('fs');


http.createServer((req, res) => {

  const qweree = url.parse(req.url, true);
  const filename = "." + qweree.pathname;

  const fsCallback =


})
