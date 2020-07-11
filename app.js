const http=require('http') //webサーバーを構築するためのモジュール（https://www.sejuku.net/blog/72566）
const server =http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});//https://www.tuyano.com/index3?id=1126003&page=2
    res.end('Hello World');
});
server.listen(3000);