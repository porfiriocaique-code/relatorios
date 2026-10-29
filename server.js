const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
http.createServer((req,res)=>{
 const pathname = new URL(req.url,'http://localhost').pathname;
 const file = path.join(root,pathname==='/'?'index.html':pathname);
 if(!file.startsWith(root+path.sep) || !['.html','.css','.js'].includes(path.extname(file))){res.writeHead(404);return res.end('Não encontrado');}
 fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);return res.end('Não encontrado');}res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript'})[path.extname(file)]);res.end(data);});
}).listen(process.env.PORT||3000,'0.0.0.0',()=>console.log('Feito disponível na porta '+(process.env.PORT||3000)));
