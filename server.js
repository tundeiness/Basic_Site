const http = require('http');
const url = require('url');
const fs = require('fs');


http.createServer((req, res) => {

  const qweree = url.parse(req.url, true);
  const filename = "." + qweree.pathname;

  const fsCallback = (err, data) =>{
    if(err){
      fs.readFile("./404.html",(err, data)=>{
        res.end(data);
      })
    }else{
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    }

  }

  fs.readFile(filename, fsCallback);

}).listen(8000);
