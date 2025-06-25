// src/unsafe_eval.js
const http = require('http');

http.createServer((req, res) => {
    const code = new URL(req.url, 'http://x').searchParams.get('code');
    eval(code);            
    res.end('done');
}).listen(3000);
